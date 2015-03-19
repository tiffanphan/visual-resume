<html>
<head>
<title>Member</title>
<script src="js/jquery-1.7.2-min.js" type="text/javascript"></script>
<script src="js/myscripts.js" type="text/javascript"></script>
<link rel="stylesheet" href="css/style.css"></link>
</head>
<body>
<?php include 'config.php'; ?>

<?php include 'function.php';?>

<?php include 'header.php';?>

<div class="container">
	<h3>Member</h3>
	<?php
		
		$mem_query= mysql_query("SELECT id FROM login");
		
		while($row_mem = mysql_fetch_array($mem_query)){
			$user_id = $row_mem["id"];
			$username =  getuser($user_id, 'username');
			echo "<a href='friendmember.php?username=$user_id' class='box' style='display:block' >$username</a>" ;
		}
	
	?>
</div>

</body>
</html>