<?php
$dbhost="localhost";
$dbuser="ablackco_black";
$dbpass="Ashirbad@97";
$dbname="ablackco_dash";
$connection=mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
if(mysqli_connect_errno())
{
	die("Database connection failed:".mysqli_connect_error()."(".mysqli_connect_errno().")");
}
?> 