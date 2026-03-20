<!DOCTYPE html>
<html>
<head>
<title>User Registration</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h2>Register</h2>

<form method="POST" action="register_process.php">
    Username:
    <input type="text" name="username" required>

    Email:
    <input type="email" name="email" required>

    Password:
    <input type="password" name="password" required>

    <input type="submit" value="Register">
</form>

<a href="login.php">Login Here</a>

</body>
</html>