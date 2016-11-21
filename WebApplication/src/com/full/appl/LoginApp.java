package com.full.appl;

import java.io.IOException;
import com.full.appl.SignUpApp;
import com.full.jdo.SignUpPojo;

import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LoginApp extends HttpServlet {

	public void doGet(HttpServletRequest req, HttpServletResponse res)throws ServletException, IOException{
		
		res.setContentType("text/html");
//		PrintWriter pw = res.getWriter();
		
		try{
			
			String userName = req.getParameter("userName");
			String password = req.getParameter("password");
			
			boolean flag = false; 
			
			for(SignUpPojo udp1 : SignUpApp.signUpList){
				
				if(userName .equals(udp1.getUserName())  && password .equals(udp1.getPassword()) ){
					
					HttpSession session=req.getSession(true);  
				       
					session.setAttribute("userName", userName);

					res.sendRedirect("/profile.jsp");
					
					flag=true;
					
					break;
				}
				
			}
			
	        
			if(flag==false){
					res.sendRedirect("login.jsp");
			}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		
	}
}
