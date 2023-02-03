package com.BloodGroup;

import javax.security.auth.callback.PasswordCallback;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer "})
public class RegistersModel {
	@GeneratedValue( generator = "increment" )
	@GenericGenerator( name = "increment", strategy = "increment" )
	@Id
	int id;
String name1;


String bgroup;


String email;
String  password;
public RegistersModel() {}
public RegistersModel(int id, String name1, String bgroup,
		String email, String password) {
	super();
	this.id = id;
	this.name1 = name1;

	
	this.bgroup = bgroup;
	
	
	this.email = email;
	this.password = password;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName1() {
	return name1;
}
public void setName1(String name1) {
	this.name1 = name1;
}


public String getBgroup() {
	return bgroup;
}
public void setBgroup(String bgroup) {
	this.bgroup = bgroup;
}


public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}



}
