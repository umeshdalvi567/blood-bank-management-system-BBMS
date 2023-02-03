package com.BloodGroup;

import javax.security.auth.callback.PasswordCallback;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity


public class DonorsModel {
	@GeneratedValue( generator = "increment" )
	@GenericGenerator( name = "increment", strategy = "increment" )
	@Id
	int id;
String name;
String gender;
long mobileno;
String bgroup;

String location;
String dob;
String email;

public DonorsModel() {}
public DonorsModel(int id, String name, String gender,long mobileno, String bgroup, String location,
		String dob, String email) {
	super();
	this.id = id;
	this.name = name;
	this.gender = gender;
	this.mobileno=mobileno;
	this.bgroup = bgroup;
	
	this.location = location;
	this.dob = dob;
	this.email = email;

}
public long getMobileno() {
	return mobileno;
}
public void setMobileno(long mobileno) {
	this.mobileno = mobileno;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}

public String getBgroup() {
	return bgroup;
}
public void setBgroup(String bgroup) {
	this.bgroup = bgroup;
}

public String getLocation() {
	return location;
}
public void setAddress(String location) {
	this.location = location;
}
public String getdob() {
	return dob;
}
public void setLdd(String ldd) {
	this.dob = dob;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}




}
