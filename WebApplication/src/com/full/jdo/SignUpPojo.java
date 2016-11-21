package com.full.jdo;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;


@PersistenceCapable
public class SignUpPojo {
	
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	public Long id;
	@Persistent
	private String firstName;
	@Persistent
	private String lastName;
	@Persistent
	private String phoneNumber;
	@Persistent
	private String userName;
	@Persistent
	private String password;
	@Persistent
	private String emailId;
	
	
	
//	public UserDetailsPojo(String firstName,String lastName,String userName,String password,String emailId,int phoneNumber){
//		
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.userName = userName;
//		this.password = password;
//		this.emailId = emailId;
//		this.phoneNumber = phoneNumber;
//	}
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	

	public Long getId() {
	return id;
	}

	public void setId(Long id) {
	this.id = id;
	}
	
	
	
}
