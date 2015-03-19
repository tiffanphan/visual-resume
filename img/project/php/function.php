<?php
session_start();
	function loggin(){
		if(isset($_SESSION['username']) && !empty($_SESSION['username'])){
			return true;
		}else{
			return false;
		}
	}

function getuser($id, $field){
	$query =  mysql_query("SELECT $field FROM login WHERE id='$id'");
	$run = mysql_fetch_array($query);
	return $run[$field];
}
?>