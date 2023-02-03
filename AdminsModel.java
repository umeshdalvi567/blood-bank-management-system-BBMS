package com.BloodGroup;

import org.hibernate.annotations.GenericGenerator;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity

public class AdminsModel {
	@GeneratedValue( generator = "increment" )
	@GenericGenerator( name = "increment", strategy = "increment" )
	@Id
int id;
String name2;
String email;
String  password;


public AdminsModel() { }

public AdminsModel(int id, String name2, String email, String password) {
	super();
	this.id = id;
	this.name2 = name2;
	this.email = email;
	this.password = password;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName2() {
	return name2;
}
public void setName2(String name2) {
	this.name2 = name2;
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
