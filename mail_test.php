<?php
// sendEmail.php

// ==== 1. CONFIGURACIÓN ====
$allowedOrigins    = ['https://advanceit.co','http://localhost:4200'];
$senderEmail       = 'no-reply@advanceit.co';
$notificationEmail = 'danielramos9991@gmail.com';

// ==== 2. CORS & PRE‑FLIGHT ====
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header('Access-Control-Allow-Origin: '   . $_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// ==== 3. MÉTODO Y CONTENT-TYPE ====
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error'=>'Método no permitido']);
    exit;
}
if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/x-www-form-urlencoded') !== 0) {
    http_response_code(415);
    echo json_encode(['error'=>'Content-Type no soportado']);
    exit;
}

// ==== 4. RECEPCIÓN Y VALIDACIÓN ====
$fields = ['email','firstName','lastName','company','solution','phone','state','source'];
$data = [];
foreach ($fields as $f) {
    if (empty($_POST[$f])) {
        http_response_code(400);
        echo json_encode(['error'=>"Campo $f es obligatorio"]);
        exit;
    }
    // Sanitización básica
    $val = trim(strip_tags($_POST[$f]));
    $val = str_replace(["\r","\n"], ' ', $val);
    $data[$f] = mb_substr($val, 0, 200);
}

// ==== 5. VALIDACIÓN EMAIL ====
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error'=>'Email inválido']);
    exit;
}
$userEmail = $data['email'];

// ==== 6. PREPARAR CUERPO HTML PARA ADMINISTRADOR ====
$adminSubject = '📝 Nuevo formulario de Teams Lite';
$adminHtml  = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Nuevo Formulario</title>';
$adminHtml .= '<style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
    .container { background: #fff; border-radius: 8px; padding: 20px; }
    h2 { color: #333; }
    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
    th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
    th { background: #f0f0f0; }
  </style></head><body>';
$adminHtml .= '<div class="container">';
$adminHtml .= '<h2>🔔 Nueva consulta recibida</h2>';
$adminHtml .= '<p>Se ha enviado un nuevo formulario con los siguientes datos:</p>';
$adminHtml .= '<table>';
foreach ($data as $key => $val) {
    $label = ucfirst($key);
    $adminHtml .= "<tr><th>{$label}</th><td>{$val}</td></tr>";
}
$adminHtml .= '</table>';
$adminHtml .= '<p style="margin-top:20px;color:#666;font-size:0.9em;">
    Enviado desde advanceit.co</p>';
$adminHtml .= '</div></body></html>';

// ==== 7. PREPARAR CUERPO HTML PARA USUARIO ====
$userSubject = '✅ Confirmación automática recibida';
$userHtml  = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Confirmación</title>';
$userHtml .= '<style>
    body { font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px; }
    .container { background: #ffffff; border-radius: 8px; padding: 20px; }
    h2 { color: #333; }
    p { line-height: 1.6; }
  </style></head><body>';
$userHtml .= '<div class="container">';
$userHtml .= '<h2>¡Gracias por tu consulta!</h2>';
$userHtml .= '<p>Este es un correo de confirmación automático. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>';
$userHtml .= '<p><strong>Datos recibidos:</strong></p><ul>';
foreach (['firstName','lastName','company','solution','phone','state','source'] as $key) {
    $label = ucfirst($key);
    $userHtml .= "<li><strong>{$label}:</strong> {$data[$key]}</li>";
}
$userHtml .= '</ul>';
$userHtml .= '<p style="margin-top:20px;color:#666;font-size:0.9em;">
    Este es un mensaje generado automáticamente, por favor no respondas a esta dirección.</p>';
$userHtml .= '</div></body></html>';

// ==== 8. CABECERAS HTML ====
$baseHeaders  = "MIME-Version: 1.0\r\n";
$baseHeaders .= "Content-type: text/html; charset=UTF-8\r\n";
$baseHeaders .= "From: \"AdvanceIT Forms\" <{$senderEmail}>\r\n";
$baseHeaders .= "X-Mailer: PHP/" . phpversion();

// ==== 9. ENVÍO AL ADMINISTRADOR ====
$resultAdmin = mail(
    $notificationEmail,
    $adminSubject,
    $adminHtml,
    $baseHeaders,
    '-f ' . $senderEmail
);

// ==== 10. ENVÍO DE CONFIRMACIÓN AL USUARIO ====
$userHeaders = $baseHeaders
    . "Reply-To: {$senderEmail}\r\n";  // responder al noreply
$resultUser = mail(
    $userEmail,
    $userSubject,
    $userHtml,
    $userHeaders,
    '-f ' . $senderEmail
);

// ==== 11. RESPUESTA JSON ====
$response = [
    'admin' => $resultAdmin ? 'ok' : 'error',
    'user'  => $resultUser  ? 'ok' : 'error'
];
header('Content-Type: application/json');
echo json_encode($response);
