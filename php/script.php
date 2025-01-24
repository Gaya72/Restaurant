<?php
// Définir les éléments de navigation dans un tableau associatif
$navItems = [
    "Page d'accueil" => "index.html",
    "Catégories" => "categorie.html",
    "Plats" => "plats.html",
    "Contact" => "#"
];
?>

<?php
// Récupérer les adresses IP du serveur et du client
$serverIP = $_SERVER['SERVER_ADDR'];
$clientIP = $_SERVER['REMOTE_ADDR'];
echo json_encode([
    'Adresse IP du serveur' => $serverIP,
    'Adresse IP du client' => $clientIP
]);
?>

<?php
// Vérifier si la méthode de requête est POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sécuriser et récupérer les données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Détails de l'email
    $to = "info@armtaste.am";
    $subject = "Nouveau message - $name";
    $body = "Nom : $name\nEmail : $email\nMessage :\n$message";

    // Envoyer l'email
    if (mail($to, $subject, $body)) {
        echo "Merci, votre message a été envoyé.";
    } else {
        echo "Désolé, l'envoi du message a échoué.";
    }
} else {
    echo "Veuillez utiliser le formulaire.";
}
?>

<?php
// Message de bienvenue
$greeting = "Bienvenue à Maisonnette à saveurs!";
?>
<div class="content">
    <h1><?php echo $greeting; ?></h1>
</div>
