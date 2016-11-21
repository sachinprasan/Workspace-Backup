package com.full.appl;

import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.full.jdo.ForgotPasswordPojo;
import com.full.jdo.PMF;
import com.full.jdo.SignUpPojo;

public class ResetPassword extends HttpServlet {
	
	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException{
		
		res.setContentType("text/html");
		
		String newPassword = req.getParameter("newPassword");
		String confirmPassword = req.getParameter("confirmPassword");
		PersistenceManager pm= PMF.get().getPersistenceManager();
		
		if(newPassword.equals(confirmPassword)){
			
		}
		
	}

}
