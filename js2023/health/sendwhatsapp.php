<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and store form data
    $name = htmlspecialchars($_POST["name"]);
    $healthProblem = htmlspecialchars($_POST["health-problem"]);
    $dietician = htmlspecialchars($_POST["dietician"]);

    // WhatsApp numbers of dieticians (replace with actual WhatsApp numbers)
    $whatsappNumbers = [
        "Dietician 1" => "7505308998", // Replace with actual WhatsApp number of Dietician 1
        "Dietician 2" => "7505308998"  // Replace with actual WhatsApp number of Dietician 2
    ];

    // Validate selected dietician
    if (array_key_exists($dietician, $whatsappNumbers)) {
        // Construct WhatsApp message
        $whatsappMessage = "Hi, I'm interested in a consultation. My name is gayatri and my health problem/goals are: weight loss";

        // Construct WhatsApp URL
        $whatsappURL = "https://wa.me/{$whatsappNumbers[$dietician]}?text=" . urlencode($whatsappMessage);

        // Redirect to WhatsApp
        header("Location: $whatsappURL");
        exit;
    } else {
        // If selected dietician is not valid (should not happen with proper form validation)
        echo "Invalid dietician selection.";
    }
} else {
    // If form is not submitted directly, redirect back to index or handle accordingly
    header("Location: index.html");
    exit;
}
?>
