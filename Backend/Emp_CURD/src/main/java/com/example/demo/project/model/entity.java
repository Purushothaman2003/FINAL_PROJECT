package com.example.demo.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="curd")
public class entity {
	
	 @GeneratedValue
	 
	 @Id
	    private Long id;
	    private String username;
	    private String name;
	    private String email;
	    private int tax;
		public int getTax() {
			return tax;
		}
		public void setTax(int tax) {
			this.tax = tax;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public entity(Long id, String username, String name, String email) {
			super();
			this.id = id;
			this.username = username;
			this.name = name;
			this.email = email;
		}
	    
	    public entity()
	    {
	    	
	    }
	

}
