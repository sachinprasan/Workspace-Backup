package com.full.appl;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LogoutApp extends HttpServlet {

	
	public void doGet(HttpServletRequest req, HttpServletResponse res)throws ServletException, IOException{
			
		res.setContentType("text/html");
		try{
//		
//			Cookie[] userCookie = req.getCookies();
//		
//			if(userCookie !=null){
//				for(Cookie cookie : userCookie){
//		    		if(cookie.getName().equals("JSESSIONID")){
//		    			System.out.println("JSESSIONID="+cookie.getValue());
//		    			cookie.setMaxAge(0);
//		    			res.addCookie(cookie);
//		    			break;
//		    		}
//			}
//			}
//		
		HttpSession session = req.getSession(false);
		
	System.out.println("User="+session.getAttribute("userName"));
		

		if(session != null){
    		session.invalidate();
    	}
		
		res.sendRedirect("login.jsp");
	
	}
		catch(Exception e){
			e.printStackTrace();
		}
	}
}
