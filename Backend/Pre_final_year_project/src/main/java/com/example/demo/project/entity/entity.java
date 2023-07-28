package com.example.demo.project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Login")
public class entity {

	@Id
	private  String username;
	private String password;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public entity(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	
	
	public entity()
	{
		
	}
	

}
