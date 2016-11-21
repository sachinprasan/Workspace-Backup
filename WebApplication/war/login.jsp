<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/loginCss.css">
<title>Login</title>
</head>
<body style="margin:0px">

<%
		response.setHeader("Cache-Control", "no-cache");
		response.setHeader("Cache-Control", "no-store");
		response.setHeader("Pragma", "no-cache");
		response.setDateHeader("Expires", 0);
		

%>
	<div class="header">
	<center><h1> Login </h1></center>
	</div>
	
		<div class="first">
			
			
				<div class="col-7" id="loginForm">
				
					<form method="get" action="/loginApp">
						
							<input type="text" name="userName" id="userName" value="" placeholder="Enter your username"><br><br>
						
							<input type="password" name="password" id="password" value="" placeholder="Enter your password"><br><br>
						
						
							<button type="submit" id="loginButton"> Login </button>
							<a class="forgotPassword" href="forgotPassword.jsp"> Forgot Password ? </a> 
					</form>
							<br><br>
							
							<span id="newUser">New User? <a href="main.jsp"> Click here to SignUp </a> </span>
					</div>
					
					
		</div>
		
		
</body>
</html>