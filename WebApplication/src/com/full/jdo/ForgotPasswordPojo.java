package com.full.jdo;


import javax.jdo.annotations.Column;
import javax.jdo.annotations.PersistenceCapable;
import com.full.jdo.SignUpPojo;
import javax.jdo.annotations.Persistent;


@PersistenceCapable
public class ForgotPasswordPojo {
	
//	@Column(name="ID")
//	SignUpPojo sp;
	
	@Persistent
	private String uniqueKey;
	
	@Persistent
	private String emailId;
	
	
	public String getUniqueKey() {
		return uniqueKey;
	}

	public void setUniqueKey(String uniqueKey) {
		this.uniqueKey = uniqueKey;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

//	public SignUpPojo getSp() {
//		return sp;
//	}
//
//	public void setSp(SignUpPojo sp) {
//		this.sp = sp;
//	}
	
	
}
