<html>
<head>
<title>New Feed</title>
<link rel="stylesheet" href="css/style.css"></link>
</head>
<body>
<script src="js/jquery-1.7.2-min.js" type="text/javascript"></script>
<script src="js/script.js" type="text/javascript"></script>
<?php include 'config.php'; ?>

<?php include 'function.php';?>

<?php include 'header.php';?>


<div class="container"> 
<h3>My Wall</h3>
<div id="feed">
<a href='newfeed.php'>Post</a> |
<a href='view.php'>View</a>
 </div>
 
 <?php
	$user_query= mysql_query("SELECT username FROM login");
	while($run_user = mysql_fetch_array($user_query)){
		$post_user = $run_user['username'];

}
?>
<?php
	$post_query= mysql_query("SELECT post, date, time FROM post");
	while ($run_post = mysql_fetch_array($post_query)){
		$post = $run_post['post'];
		$post_date = $run_post['date'];
		$post_time = $run_post['time'];

		
?>
	<div>
		<b>User: <a href="profile.php"><?php echo $post_user; ?></a> </b>
		</br>
	</div>
	<div>
		<?php echo $post;?> | <?php echo $post_date;?> | <?php echo $post_time; ?> 
	</div>
	
	
<?php
	
	}
 
 
 
 ?>
 
 
 
 
 </div>
 </body>
 </html>