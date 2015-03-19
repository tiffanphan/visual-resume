<!doctype html>
<html>
<head>
<title>Login</title>
<link rel="stylesheet" href="css/style.css"></link>
</head>
<body>
<?php include 'config.php'; ?>

<?php include 'function.php';?>

<?php include 'header.php';?>

<div class="container">
<h3>Login Form</h3>
<form action="" method="POST">
<label for="username">Username</label><br/>

		<input type="text" name="username" value=""></input><br/>

	<label for="password">Password</label><br/>

		<input type="password" name="password" value=""></input><br/>
<input type="submit" value="Login" name="submit" />
		<input type="hidden" name="website" value="">
		<input type="hidden" name="bio" value="">
        <input type="hidden" name="email" value="">
        <input type="hidden" name="gender" value="">
        <input type="hidden" name="zip" value="">
        <input type="hidden" name="interest" value="">
        <input type="hidden" name="job" value="">
</form>
</div>
<?php
	
	if(isset($_POST["submit"])){
	$username=$_POST['username'];
	$password=$_POST['password'];
	$email=$_POST['email'];
	$gender=$_POST['gender'];
	$zip=$_POST['zip'];
	$bio=$_POST['bio'];
	$website=$_POST['website'];
	$interest=$_POST['interest'];
	$job=$_POST['job'];
	if($username&&$password)
	{
		
		$query=mysql_query("SELECT * FROM login WHERE username='$username' AND password='$password'");
		$numrows=mysql_num_rows($query);
		if($numrows!=0)
		{
			while($row=mysql_fetch_assoc($query))
		{
			$dbusername=$row['username'];
			$dbpassword=$row['password'];
			$email=$row['email'];
			$gender=$row['gender'];
			$zip=$row['zip'];
			$bio=$row['bio'];
			$website=$row['website'];
			$interest=$row['interest'];
			$job=$row['job'];
			$user_id = $row["id"];
		}
		
		//check to see if they match!
		if($username==$dbusername && $password==$dbpassword)
		{
			echo "You're in";
			$_SESSION['user_id'] = $user_id;
			$_SESSION['username']=$username;
			$_SESSION['password']=$password;
			$_SESSION['email']=$email;
			$_SESSION['gender']=$gender;
			$_SESSION['zip']=$zip;
			$_SESSION['bio']=$bio;
			$_SESSION['website']=$website;
			$_SESSION['interest']=$interest;
			$_SESSION['job']=$job;
			
			header('location: index.php');
		}
		else
			echo "Incorrect user name or password";
		}
		else 
			die("That user doesn't exit");
	}
	else
		die("Please enter a username and password");
}
?>

</body>
</html>