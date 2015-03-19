<?php
	include 'function.php';
	session_destroy();
	
	header('location: index.php');
	echo "You've been logged out. <a href='login1.php'>Click</a> here to return";
?>