<?php
include 'config.php'; 

include 'function.php';

$action = $_GET['action'];

$username = $_GET['username'];

$my_id = $_SESSION['user_id'];

if($action == 'send'){
	mysql_query("INSERT INTO frnd_req VALUES ('', '$my_id', '$username')");
}

if($action == 'cancel'){
	mysql_query("DELETE FROM `frnd_req` WHERE `from`='$my_id' AND `to`='$username'");
}

if($action == 'accept'){
	mysql_query("DELETE FROM `frnd_req` WHERE `from`='$username' AND `to`='$my_id'");
	
	mysql_query("INSERT INTO frnd VALUES ('', '$username', '$my_id')");
}

if($action == 'unfriend'){
	mysql_query("DELETE FROM `frnd_req` WHERE( user_one='$my_id' AND user_two = '$username') OR (user_one='$username' AND user_two = '$my_id')");
}
header("location:friendmember.php?username=".$username);
?>
