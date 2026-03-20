<?php
session_start();

if(!isset($_SESSION['username'])){
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
<title>Dashboard</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="dashboard-container">
    <div class="card">
        <h2>Welcome, <?php echo $_SESSION['username']; ?> 👋</h2>

        <p>You are successfully logged in.</p>

        <a class="btn" href="logout.php">Logout</a>
    </div>
</div>

</body>
</html>
