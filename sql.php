<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', 'GoPats54.2Sc00ter','Website');

// get the post records
$txtName = $_POST['Name'];
$txtEmail = $_POST['Email'];
$txtMessage = $_POST['Message'];

if(isset($txtName)){echo $txtName;}
if(isset($txtEmail)){echo $txtEmail;}
if(isset($txtMessage)){echo $txtMessage;}

// database insert SQL code
$sql = "INSERT INTO `tbl_contact` (`Name`, `Email`, `Message`) VALUES ('$txtName', '$txtEmail', '$txtMessage')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>