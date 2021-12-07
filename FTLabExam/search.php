<?php
error_reporting(0);
$conn = mysqli_connect("localhost","root","","mydb");
if(count($_POST)>0) {
$roll_no=$_POST[ID];
$result = mysqli_query($conn,"SELECT * FROM employee where ID='$ID' ");
}
?>
<!DOCTYPE html>
<html>
<head>

</head>
<body>
<table>
<tr>
<td>ID</td>
<td>Name</td>
<td>Department</td>
<td>JoiningDate</td>
<td>Salary</td>

</tr>
<?php
$i=0;
while($row = mysqli_fetch_array($result)) {
?>
<tr>
<td><?php echo $row["id"]; ?></td>
<td><?php echo $row["name"]; ?></td>
<td><?php echo $row["department"]; ?></td>
<td><?php echo $row["joiningdate"]; ?></td>
<td><?php echo $row["salary"]; ?></td>
</tr>
<?php
$i++;
}
?>
</table>
</body>
</html>