<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Honeypot field
    if (!empty($_POST['honeypot'])) {
        // If the honeypot field is filled, it's likely a bot
        echo "Diese Aktion ist nicht möglich!";
    }

    // Sanitize and validate input
    $vorname = filter_var($_POST['vorname'], FILTER_SANITIZE_SPECIAL_CHARS);
    $nachname = filter_var($_POST['nachname'], FILTER_SANITIZE_SPECIAL_CHARS);
    $telefon = filter_var($_POST['telefon'], FILTER_SANITIZE_SPECIAL_CHARS);
    $text = filter_var($_POST['text'], FILTER_SANITIZE_SPECIAL_CHARS);

    // Email details
    $to = "info@tortuga-webdesign.de";
    $subject = "Neue Anfrage";
    $message = "Vorname: $vorname\nNachname: $nachname\nTelefon: $telefon\nNachricht: $text";
    $headers = "From: formular@gartenbau-botanicus.de";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Vielen Dank für Ihre Anfrage!";
    } else {
        echo "Es ist leider ein Fehler passiert, bitte schreiben Sie uns direkt eine E-Mail oder rufen Sie uns an.";
    }
} else {
    echo "Diese Aktion ist nicht möglich.";
}
