package com.full.appl;

import java.io.IOException;
import java.util.List;
import java.util.Properties;
import java.util.UUID;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.full.jdo.ForgotPasswordPojo;
import com.full.jdo.PMF;
import com.full.jdo.SignUpPojo;
import com.google.appengine.api.mail.MailService;
import com.google.appengine.api.mail.MailServiceFactory;



public class ForgotPassword extends HttpServlet {

	private static Logger log = Logger.getLogger("ForgotPassword");
	
	
	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException{
		
		
		String email = req.getParameter("emailId");
		//String uid = UUID.randomUUID().toString();
		Properties prop = new Properties();
		   Session sessio = Session.getDefaultInstance(prop,null);
		        
		       Message mimeMessage = new MimeMessage(sessio);
		      // mimeMessage.setContent(arg0);
		       // mimeMessage.setFrom(new InternetAddress("sriram.umapathy@a-cti.com"));
		      //  mimeMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(email, "Mr./Ms."+name));
		     //   mimeMessage.setSubject("ToDo List Reminder for added note");
		     //   mimeMessage.setText("Name :: "+name+"\nEmail-id :: "+email+"\n\n\n"+dataadd+"\n\n"+buffer.toString());
		        //((Message) mimeMessage).setHtmlBody(writer);
		        MailService mailService = MailServiceFactory.getMailService();
		        MailService.Message message = new MailService.Message();
				message.setSender("prasanna.lakshman@a-cti.com");
				message.setTo(email);
				message.setSubject("ToDo List Reminder for added note");
				message.setHtmlBody("<a href='sampletodolist-app.appspot.com/resetPassword.jsp'>click here</a>");
				mailService.send(message); 
				        
		       // Transport.send(mimeMessage);
		        System.out.println("Successfull Delivery.");
		
		
		
		
//		
//		res.setContentType("text/html");
//		
//		String email = req.getParameter("emailId");
//		String uid = UUID.randomUUID().toString();
//			
//		
//		log.info(email);
//		System.out.println( email );
//		log.info(uid);
//		System.out.println( uid );
//		
//		
//		PersistenceManager pm= PMF.get().getPersistenceManager();
//		ForgotPasswordPojo fp = new ForgotPasswordPojo();
//	
//		try
//		{
//			fp.setUniqueKey(uid);
//			fp.setEmailId(email);
//			
//			pm.makePersistent(fp);
//			
//			Query q = pm.newQuery(SignUpPojo.class," emailId == '" + email + "'");
//			
//			List<SignUpPojo> lst = (List<SignUpPojo>) q.execute();
//			
//			System.out.println( "SIZE="+lst.size() );
//			
//			if(!lst.isEmpty()){
//				
//			//	String url = "<a href='http://2-dot-sampletodolist-app.appspot.com/resetPassword.jsp?ukey="+uid+"' >Click Here</a>";
//				String subject = "Reset Password";
//				String msgBody = "Dear user to rest your password click this link ";//+ " "+ url;
//				
//				Properties p=new Properties();
//				p.put("mail.smtp.auth","true"); //authentication purpose 
//				p.put("mail.smtp.host","smtp.gmail.com"); //only gmail accout is possible
//				p.put("mail.smtp.port",587); //default port id for smtp
//				p.put("mail.smtp.starttls.enable","true"); 
//				Session session = Session.getDefaultInstance(p,new javax.mail.Authenticator() 
//				{
//				protected PasswordAuthentication getPasswordAuthentication()
//				{
//				return new PasswordAuthentication("prasanna.lakshman@a-cti.com","Prassy@4268");
//				}
//				});
//	
//				try {
//					
//					System.out.println( "Gonna build mimemessage" );
//					MimeMessage msg = new MimeMessage(session);
//					msg.setFrom(new InternetAddress("prasanna.lakshman@a-cti.com",
//							"Admin"));
//					msg.addRecipient(Message.RecipientType.TO, new InternetAddress(
//							email));
//					msg.setSubject(subject);
//					msg.setText(msgBody);
//					
//					 String htmlBody = "<a href='https://my.setmore.com'>Click Here</a>";
//					
//				      Multipart mp = new MimeMultipart();
//
//				      BodyPart htmlPart = new MimeBodyPart();
//				      htmlPart.setContent(htmlBody, "text/html");
//				      
//				      mp.addBodyPart(htmlPart);
//				      
//				      System.out.println(mp);
//				      msg.setContent(mp);
//					
//				      
//				      System.out.println(msg);
//					Transport.send(msg); 
//					System.out.println("Mail Sent");
//					
//				} catch (Exception e) {
//					System.out.println(e);
//				} 
//			}
//		}
//		catch(Exception e)
//		{
//			e.printStackTrace();
//		}
//		finally
//		{
//			if(pm != null)
//				pm.close();
//		}
//		
//		
	}
}
