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
 </br>
 <h4> What is on your mind? <h4>

    <form action="" method="post">
	<?php
	if(isset($_POST['message']) && !empty($_POST['message'])){
		$message = nl2br($_POST['message']);
		mysql_query('INSERT INTO post ( ID, POST, DATE, TIME) VALUES ("","'.$message.'", now(), now())');
		echo "<p>Successful Posted</p>";
	}
	
	?>	
        <textarea name="message"></textarea></br>
        <input type ="submit" value ="Post" />
	</form>
	
</div>

</body>
</html>