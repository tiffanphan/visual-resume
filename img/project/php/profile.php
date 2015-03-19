
<!doctype html>
<html>
<head>
<title>Profile</title>
<script src="js/jquery-1.7.2-min.js" type="text/javascript"></script>
<script src="js/myscripts.js" type="text/javascript"></script>
<link rel="stylesheet" href="css/style.css"></link>
</head>
<body>
<?php include 'config.php'; ?>

<?php include 'function.php';?>

<?php include 'header.php';?>


<div class="container">
<h3>Welcome, <?=$_SESSION['username'];?>!</h3>
<div id="userinfo">
<ul>
	<li>Your username is <?=$_SESSION['username'];?></li>
<li>Your password is <?=$_SESSION['password'];?></li>
<li>Your email is <?=$_SESSION['email'];?></li>
<li>Your gender is <?=$_SESSION['gender'];?></li>
<li>Your zipcode is <?=$_SESSION['zip'];?></li>
<li>Your bio is <?=$_SESSION['bio'];?></li>
<li>Your website is <?=$_SESSION['website'];?></li>
<li>Your interest is <?=$_SESSION['interest'];?></li>
<li>Your job is <?=$_SESSION['job'];?></li>
</ul>

</div>
<a href="update.php">Update your profile</a>
</div>

</body>
</html>
