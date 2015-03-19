<div id="title_bar">
	<ul>
	<li><a href="index.php">Home</a></li>
	<?php
		if(loggin()){
	?>
		<li><a href="profile.php">Profile</a></li>
		<li><a href="newfeed.php">New Feed</a></li>
		<li><a href="req.php">Request</a></li>
		<li><a href="friend.php">Friend</a></li>
		<li><a href="member.php">Member</a></li>
		<li><a href="logout.php">Logout</a></li>
	<?php
		}else{
	?>
		<li><a href="login1.php">Login</a></li>
		<li><a href="register1.php">Register</a></li>
	<?php
		}
	?>
	<div class="clear"></div>
	</ul>
</div>