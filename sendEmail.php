<?php
// sendEmail.php

// 1. CORS y orígenes permitidos
$allowedOrigins = [
    'https://advanceit.co',
    'http://localhost:4200'
];
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

// 2. Sólo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Método no permitido');
}

// 3. reCAPTCHA
// $recaptcha = $_POST['g-recaptcha-response'] ?? '';
// if (!$recaptcha) {
//     http_response_code(403);
//     exit('reCAPTCHA no completado');
// }
// $secretKey = '6Ldn_xwrAAAAAKeyytlh-LU6Hg4KjT6yU5hSfAgc';
// $response = file_get_contents(
//     'https://www.google.com/recaptcha/api/siteverify?secret=' . $secretKey . '&response=' . $recaptcha
// );
// $json = json_decode($response, true);
// if (!($json['success'] ?? false)) {
//     http_response_code(403);
//     exit('Error validando reCAPTCHA');
// }

// 4. Recibir y sanitizar campos
$fields = ['email','firstName','lastName','company','solution','phone','state','source'];
$data = [];
foreach ($fields as $f) {
    if (empty($_POST[$f])) {
        http_response_code(400);
        exit("Campo $f es obligatorio");
    }
    $data[$f] = strip_tags(trim($_POST[$f]));
}

// 5. Preparar correo
$to      = 'danielramos999@gmail.com';
$subject = 'Nuevo formulario de Teams Lite';
$body    = "Nueva consulta:\n";
foreach ($data as $k => $v) {
    $body .= ucfirst($k) . ": $v\n";
}

$headers  = "From: no-reply@advanceit.co\r\n";
$headers .= "Reply-To: " . $data['email'] . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo 'OK';
} else {
    http_response_code(500);
    echo 'Error enviando correo';
}
?>
