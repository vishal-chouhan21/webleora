<?php
// Copy this file to config.php on your server and fill in your SMTP details.
return [
  'smtp_host'   => 'smtp.yourhost.com',
  'smtp_port'   => 587,
  'smtp_secure' => 'tls',
  'smtp_user'   => 'info@yourdomain.com',
  'smtp_pass'   => 'YOUR_SMTP_PASSWORD',
  'from_email'  => 'info@yourdomain.com',
  'from_name'   => 'Webleora Website',
  'to_email'    => 'info@yourdomain.com',
  'auto_reply'  => true,
  'allowed_origins' => ['http://localhost:3000', 'https://yourdomain.com'],
];
