<?php
    $destinatario = 'albertocortes@reforestamos.org';

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $header = " ¡Gracias! A la brevedad nos contactaremos contigo";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo("<script>setTimeout(\"location.href='https://www.reforestamosmexico.org/contacto/'\",1000)</script>");


?>