 		
<html>
<body>

Welcome <?php echo $_POST["firstname"]; ?><br>

<h1>Your Form was successful Submitted</h1> 
<h1>Here is the information You've entered:</h1>
<b>Username: </b> <?php echo $_POST["username"]; ?></br>
<b>First Name:</b> <?php echo $_POST["firstname"]; ?></br>
<b>Last Name:</b> <?php echo $_POST["lastname"]; ?></br>
<b>Email address:</b> <?php echo $_POST["email"]; ?></br>
<b>Phone Number:</b> <?php echo $_POST["phone"]; ?></br>
<h1>Thank You!</h1>
</body>
</html>
 