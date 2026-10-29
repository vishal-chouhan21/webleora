<?php
// === SMTP DETAILS ===
return [
  'smtp_host'   => 'smtp.ethereal.email',
  'smtp_port'   => 587,                 // 587 (tls) or 465 (ssl)
  'smtp_secure' => 'tls',               // 'tls' or 'ssl'
  'smtp_user'   => 'mariah.lang@ethereal.email',
  'smtp_pass'   => 'jWwGZdY53Edu2dp7ep',
  'from_email'  => 'mariah.lang@ethereal.email',
  'from_name'   => 'Webleora Website',
  'to_email'    => 'mariah.lang@ethereal.email', // where enquiries are delivered
  'auto_reply'  => true,                // send a thank-you email to the visitor
  // Origins allowed to post the form (needed only if the site and PHP are on different domains/ports)
  'allowed_origins' => ['http://localhost:3000', 'https://webleora.vercel.app', 'https://webleora.com', 'https://www.webleora.com'],
];
