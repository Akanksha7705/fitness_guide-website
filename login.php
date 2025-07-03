<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve username and password from the form
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    // You should perform proper validation and sanitization here
    
    // Check if the username and password match a predefined value
    // For demonstration purposes, let's assume the correct username is "admin" and password is "password"
    if ($username === "admin" && $password === "password") {
        // Start a session
        session_start();
        
        // Store username in session variable (you can store more information as needed)
        $_SESSION["username"] = $username;
        
        // Redirect to a protected page
        header("Location: welcome.php");
        exit();
    } else {
        // If the username or password is incorrect, redirect back to the login page with an error message
        header("Location: login.html?error=1");
        exit();
    }
} else {
    // If the form is not submitted, redirect to the login page
    header("Location: login.html");
    exit();
}
?>
