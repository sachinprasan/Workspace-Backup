<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/signUp.css">
<title>Sign Up</title>
</head>
<body>


<h1>Sample Application</h1>
    
		<form method="post" action="/signUpApp">
			
			<input type="text" name="fname" id="fname" value="" placeholder="Enter your FirstName"><br><br>
			
			<input type="text" name="lname" id="lname" value="" placeholder="Enter your LastName"><br><br>
		
			<input type="email" name="mailId" id="mailId" value="" placeholder="Enter your e-mail"><br><br>
		
			<input type="text" name="userName" id="userName" value="" placeholder="Enter your username"><br><br>
		
			<input type="password" name="password" id="password" value="" placeholder="Enter your password"><br><br>
			
			<input type="text" name=phoneNumber id="phoneNumber" value="" placeholder="Enter your PhoneNumber"><br><br>
			
			<button type="submit" id="signUp"> Create an Account </button>
			
		</form>
    	<br><br>
    	<span id="existingUser">Existing User? <a href="login.jsp" target="new"> Click here to Login </a> </span>

</body>
</html>