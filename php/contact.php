<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';
$cfg = require __DIR__ . '/config.php';
header('Content-Type: application/json; charset=utf-8');
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && in_array($origin, $cfg['allowed_origins'], true)) {
  header("Access-Control-Allow-Origin: $origin"); header('Access-Control-Allow-Methods: POST, OPTIONS'); header('Access-Control-Allow-Headers: Content-Type');
}
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit; }
function out($ok, $err = '') { echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $err]); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(false, 'Invalid request.');
if (!empty($_POST['website'])) out(true); // honeypot: pretend success to bots

$f = fn($k) => trim(strip_tags($_POST[$k] ?? ''));
$e = fn($s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
$name = $f('name'); $email = $f('email'); $details = $f('details');
if ($name === '' || $details === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) out(false, 'Please fill in your name, a valid email and project details.');
$fields = [
  'Name' => $name, 'Email' => $email, 'Company' => $f('company'), 'Country / Time zone' => $f('country'),
  'Service of interest' => $f('service'), 'Estimated budget' => $f('budget'), 'Target timeline' => $f('timeline'),
];

// ---------- Email template (HTML) ----------
function wrap($title, $inner) {
  return '<div style="background:#f3f5fb;padding:30px 12px;font-family:Arial,Helvetica,sans-serif;color:#333">'
   . '<table align="center" width="600" style="max-width:600px;width:100%;background:#fff;border-radius:14px;overflow:hidden" cellpadding="0" cellspacing="0">'
   . '<tr><td style="background:linear-gradient(90deg,#4D51AB,#55CEE3);background-color:#4D51AB;padding:24px 30px;color:#fff;font-size:22px;font-weight:bold">Webleora</td></tr>'
   . '<tr><td style="padding:30px"><h2 style="margin:0 0 20px;font-size:20px;color:#1a1a3d">' . $title . '</h2>' . $inner . '</td></tr>'
   . '<tr><td style="padding:16px 30px;background:#f3f5fb;font-size:12px;color:#777">Webleora &middot; Thoughtful Digital Solutions</td></tr></table></div>';
}
$rows = '';
foreach ($fields as $k => $v) {
  if ($v === '') continue;
  $rows .= '<tr><td style="padding:10px 12px;border-bottom:1px solid #eee;font-weight:bold;width:170px;vertical-align:top">' . $e($k) . '</td><td style="padding:10px 12px;border-bottom:1px solid #eee">' . $e($v) . '</td></tr>';
}
$adminHtml = wrap('New project enquiry',
  '<table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px">' . $rows . '</table>'
  . '<h3 style="margin:24px 0 8px;font-size:16px;color:#1a1a3d">Project details</h3><div style="font-size:14px;line-height:1.6;background:#f3f5fb;padding:16px;border-radius:10px">' . nl2br($e($details)) . '</div>');
$adminText = "New project enquiry\n\n";
foreach ($fields as $k => $v) { if ($v !== '') $adminText .= "$k: $v\n"; }
$adminText .= "\nProject details:\n$details\n";

function mailer($cfg) {
  $m = new PHPMailer(true);
  $m->isSMTP(); $m->Host = $cfg['smtp_host']; $m->SMTPAuth = true; $m->Username = $cfg['smtp_user']; $m->Password = $cfg['smtp_pass'];
  $m->SMTPSecure = $cfg['smtp_secure'] === 'ssl' ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS; $m->Port = $cfg['smtp_port'];
  $m->CharSet = 'UTF-8'; $m->isHTML(true);
  $m->setFrom($cfg['from_email'], $cfg['from_name']);
  return $m;
}

try {
  $m = mailer($cfg);
  $m->addAddress($cfg['to_email']); $m->addReplyTo($email, $name);
  $m->Subject = 'New project enquiry from ' . $name; $m->Body = $adminHtml; $m->AltBody = $adminText;
  $m->send();
} catch (Exception $ex) { error_log('Mail error: ' . $ex->getMessage()); out(false, 'We could not send your enquiry right now. Please try again later.'); }

// Auto-reply to visitor (a failure here never breaks the form)
if (!empty($cfg['auto_reply'])) {
  try {
    $r = mailer($cfg);
    $r->addAddress($email, $name); $r->addReplyTo($cfg['to_email']);
    $r->Subject = 'Thank you for contacting Webleora';
    $r->Body = wrap('Thank you, ' . $e($name),
      '<p style="font-size:14px;line-height:1.7">Thank you for contacting Webleora. We have received your enquiry and will review the details you shared. We will get back to you using the contact details you provided.</p>'
      . '<p style="font-size:14px;line-height:1.7">If you would like to add anything, simply reply to this email.</p>');
    $r->AltBody = "Hi $name,\n\nThank you for contacting Webleora. We have received your enquiry and will get back to you using the details you provided.\n\nWebleora";
    $r->send();
  } catch (Exception $ex) { error_log('Auto-reply error: ' . $ex->getMessage()); }
}
out(true);
