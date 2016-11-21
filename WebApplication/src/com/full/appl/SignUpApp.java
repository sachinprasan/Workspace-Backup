package com.full.appl;

import java.io.IOException;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;


import javax.jdo.PersistenceManager;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.full.jdo.PMF;
import com.full.jdo.SignUpPojo;



public class SignUpApp extends HttpServlet {

	 public static ArrayList<SignUpPojo> signUpList = new ArrayList<SignUpPojo>();
	
	public void doPost(HttpServletRequest req, HttpServletResponse res)throws ServletException, IOException{
			
		res.setContentType("text/plain");
		
		try{
//			UUID.randomUUID();
			String userName = req.getParameter("userName");
			String password = req.getParameter("password");
			String mailId = req.getParameter("mailId");
			String fname = req.getParameter("fname");
			String lname = req.getParameter("lname");
			String phoneNumber = req.getParameter("phoneNumber");
			
			//signUpList.add(new SignUpPojo(fname,lname,userName,password,mailId,ph));
			
			PersistenceManager pm= PMF.get().getPersistenceManager();
			SignUpPojo sp = new SignUpPojo();
			
			sp.setFirstName(fname);
			sp.setLastName(lname);
			sp.setEmailId(mailId);
			sp.setUserName(userName);
			sp.setPassword(password);
			sp.setPhoneNumber(phoneNumber);
			
			pm.makePersistent(sp);
			
			res.sendRedirect("/login.jsp");
//			RequestDispatcher rd = req.getRequestDispatcher("/login.jsp");
//			rd.include(req, res);
			
		}
		catch(Exception e){
			e.printStackTrace();
			e.getMessage();
		}
	}
}
