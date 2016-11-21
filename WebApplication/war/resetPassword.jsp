<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reset Password</title>
<link rel="stylesheet" href="css/resetPassword.css">
</head>
<body>
	<div class="header">
	
	</div>
	<a href="index.jsp"><img src="images/ToDo-List-icon.png" id="iconImg"></a>
	<div class=" col-9 resetPassword">
			<p class="findAccount">Password Reset</p>
		<form method="post" onsubmit="return passwordCheck()" action="/resetPassword">
			<label id="label">Enter your new Password.</label><br>
			<input type="password" name="newPassword" id="newPassword" value="" placeholder=" New Password">
				<br>
			<input type="password" name="confirmPassword" id="confirmPassword" value="" placeholder=" Confirm Password">
			<br>	
			<button type="submit" id="resetPassword">Reset Password</button>

		</form>
	</div>

<script>
function passwordCheck(){
	
var newPassword = document.getElementById("newPassword").value;
var confirmPassword = document.getElementById("confirmPassword").value;
var ok = true;
if(newPassword != confirmPassword){
	document.getElementById("newPassword").style.borderColor = "red";
    document.getElementById("confirmPassword").style.borderColor = "red";
	ok =false;
	}
else{
	document.getElementById("newPassword").style.borderColor = "green";
    document.getElementById("confirmPassword").style.borderColor = "green";
}
return ok;
}

</script>

</body>
</html>