<html>
<head>
<title>Friend Profile Member</title>
<script src="js/jquery-1.7.2-min.js" type="text/javascript"></script>
<script src="js/myscripts.js" type="text/javascript"></script>
<link rel="stylesheet" href="css/style.css"></link>
</head>
<body>
<?php include 'config.php'; ?>

<?php include 'function.php';?>

<?php include 'header.php';?>

<div class="container">
	<h3>Request: </h3>
	<?php
		$my_id = $_SESSION['user_id'];
		$req_query = mysql_query("SELECT `from` FROM `frnd_req` WHERE `id`='$my_id'");
		while($run_req = mysql_fetch_array($req_query)){
			$from = $run_req['from'];
			$from_username = getuser($from, 'username' );
			echo "<a href='friendmember.php?username=$from class='box' style='display:block;'>$from_username</a>";
		}
	?>



</div>
<body>
</html>