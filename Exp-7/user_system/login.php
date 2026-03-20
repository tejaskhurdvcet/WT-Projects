<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h2>User Login</h2>

<form method="POST" action="login_process.php">
    Email:
    <input type="email" name="email" required>

    Password:
    <input type="password" name="password" required>

    <input type="submit" value="Login">
</form>

<a href="register.php">Register Here</a>

</body>
</html>