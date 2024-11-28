<?php
// Սահմանում ենք նավիգացիայի տարրերը ասոցիատիվ զանգվածում
$navItems = [
    "Գլխավոր էջ" => "index.html",
    "Կատեգորիաներ" => "categorie.html",
    "Ուտեստներ" => "plats.html",
    "Կապ" => "#"
];
?>

<?php
$serverIP = $_SERVER['SERVER_ADDR'];
$clientIP = $_SERVER['REMOTE_ADDR'];
echo json_encode([
    'serverIP' => $serverIP,
    'clientIP' => $clientIP
]);
?>
