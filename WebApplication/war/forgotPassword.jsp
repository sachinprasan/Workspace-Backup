<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Password Change</title>
<link rel="stylesheet" href="css/forgotPassword.css">
</head>
<body>
	<div class="header">
	<a href="index.jsp"><img src="images/ToDo-List-icon.png" id="iconImg"></a>
	</div>
	<div class=" col-7 forgotPassword">
			<p class="findAccount">Let's Find your Account</p>
		<form method="post" action="/forgotPassword">
			<label id="label">Enter your email address associated with your account.</label><br>
			<input type="email" name="emailId" id="emailId" value="" placeholder=" Enter your Email Address">
				<br>
			<button type="submit" id="forgotPassword">Submit</button>

		</form>
	</div>

</body>
</html>