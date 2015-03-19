<html>
<head>
<title>Update</title>
<script src="js/jquery-1.7.2-min.js" type="text/javascript"></script>
<script src="js/myscripts.js" type="text/javascript"></script>
<link rel="stylesheet" href="css/style.css"></link>
</head>
<body>
<?php include 'config.php'; ?>

<?php include 'function.php';?>

<?php include 'header.php';?><body>

<h3>Update Form</h3>
<div class="container">
<form method="post" action="">
	<label for="username">Username</label><br/>

		<input type="text" name="username" value=""></input><br/>
	
	<label for="password">Password</label><br/>

		<input type="password" name="password" value=""></input><br/>
		
	<label for="fname">Firstname</label><br/>

		<input type="text" name="fname" value=""></input><br/>

	<label for="lname">Lastname</label><br/>

		<input type="text" name="lname" value=""></input><br/>

	<label for="email">E-mail</label><br/>

		<input type="text" value="" name="email"></input></br>

	<label for="zip">Zip Code</label><br/>

	<input name="zip" type="text" value=""></input><br/>
	
	<label for="bio">Bio</label><br/>
	<textarea name="bio" id='comment' value="" ></textarea><br />

	<label for="website">Website</label><br/>
	<input name="website" type="text" value=""></input><br/><br/>
	
	<label for="interest">Interests</label><br/>
	<input name="interest" type="text" value=""></input><br/><br/>
	
	<label for="job">Job</label><br/>
	<input name="job" type="text" value=""></input><br/><br/>


	<input type="submit" name="submit" value="Save" ></input>
</form>
</div>
<?php
	if(isset($_POST["submit"])){
	$username=$_POST['username'];
	$password=$_POST['password'];
	$zip=$_POST['zip'];
	$bio=$_POST['bio'];
	$website=$_POST['website'];
	$interest=$_POST['interest'];
	$job=$_POST['job'];
	$email=$_POST['email'];
	if($password&&$username){
		//check if newemail exist
		$exists=mysql_query("SELECT * FROM login WHERE username='$username'") or die("Wrong");
		$numrows=mysql_num_rows($exists);
	if($numrows!=0){
		mysql_query("UPDATE login SET password='$password' WHERE username='$username'");
		echo" Your profile has been updated";
		}
		else
			echo "Incorrect password";
		}
	else 
			echo "That user doesn't exit";
	}
?>
</body>
</html>