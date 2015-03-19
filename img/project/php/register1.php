<html>
<head>
<link rel="stylesheet" href="css/style.css"></link>
</head>
<body>
<?php include 'config.php'; ?>

<?php include 'function.php';?>

<?php include 'header.php';?>

<div class="container">
<h3>Registration Form</h3>
<form method="POST" action="">
	<label for="username">Username</label><br/>

		<input type="text" name="username" value=""></input><br/>

	<label for="password">Password</label><br/>

		<input type="password" name="password" value=""></input><br/>

	<label for="email">E-mail</label><br/>

		<input type="text" value="" name="email"></input></br>

	<label for="gender">Gender</label><br/>

		<select name="gender">

			<option value=""></option>

			<option value="male">Male</option>

			<option value="female">Female</option>

			<option value="other">Other</option>

		</select><br/>

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


	<input type="submit" name="submit" value="Register"></input>
</form>
</div>
<?php
	include 'config.php';
if(isset($_POST["submit"])){
	
	$username=$_POST["username"];
	$password=$_POST["password"];
	$email= $_POST["email"];
	$gender=$_POST["gender"];
	$zip=$_POST["zip"];
	$bio=$_POST["bio"];
	$website=$_POST["website"];
	$interest=$_POST["interest"];
	$job=$_POST["job"];
	if(empty($username) && empty($password) && empty($email) && empty($gender) && empty($zip)){
		echo "Please fill in the blank";
	}else{
	$query=mysql_query("SELECT * FROM login WHERE username='".$username."'");
	$numrow=mysql_num_rows($query);
	if($numrow==0){
		$sql="INSERT INTO login(username, password, email, gender, zip, bio, website, interest, job) VALUES('$username','$password','$email','$gender','$zip','$bio','$website','$interest','$job')";
		$result=mysql_query($sql);
		
		if($result){
			echo "Account successful created";
		}else{
			echo "FAILURE";
		}
	}else{
		echo "That username is already exist";
	}
	}
	}
?>
</body>
</html>