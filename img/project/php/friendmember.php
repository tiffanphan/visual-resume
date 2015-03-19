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
<?php
	if(isset($_GET['username']) && !empty($_GET['username'])){
		$username = $_GET['username'];
	}else{
		$username = $_SESSION['user_id'];
	}
	$my_id = $_SESSION['user_id'];
	$username = getuser($username, 'username');
	
?>
<h4><?php echo $username ?></h4>
<?php
if($username != $my_id){
	$check_frnd_query = mysql_query("SELECT id FROM frnd WHERE (user_one='$my_id' AND user_two = '$username') OR (user_one='$username' AND user_two = '$my_id')");
	if(mysql_num_rows($check_frnd_query)==1){
		echo "<a href='#' class='box'>Already Friend</a> | <a href='action.php?action=unfriend&username=$username'>Unfriend $username</a>";
	}else{
		$from_query = mysql_query("SELECT `id` FROM `frnd_req` WHERE `from`='$username' AND `to` = '$my_id'");
		$to_query = mysql_query("SELECT `id` FROM `frnd_req` WHERE `from`='$my_id' AND `to` = '$username'");
		if(mysql_num_rows($from_query)==1){
			echo "<a href='#' class='box'>Ignore</a>| <a href='action.php?action=accept&username=$username' class='box'>Accept</a>";
		}else if(mysql_num_rows($to_query)==1){
			echo "<a href='action.php?action=cancel&username=$username' class='box'>Cancel Request</a>";
		}else{
			echo "<a href='action.php?action=send&username=$username' class='box'>Send Friend Requesst</a>";
		}
	}
}
?>
</div>
</body>
</html>