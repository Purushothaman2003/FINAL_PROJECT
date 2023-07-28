package com.example.demo.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.project.model.entity;
import com.example.demo.project.service.service;

@RestController
@CrossOrigin("*")
public class controller {
	
	@Autowired
	
	service r;
	

	@PostMapping("/post")
	public String addDetails(@RequestBody entity m) {
		r.add(m);
		return "Added product " ;
	}
	
	@GetMapping("/get")
	public List<entity> showDetails() {
		return r.getDetails();

	}
	@GetMapping("/get/{id}")
	public entity showDetail(@PathVariable Long id) {
		return r.getDetail(id);

	}

	
	
	@PutMapping("/update/{id}")
	public entity Details(@RequestBody entity newUser ,@PathVariable Long id)
	{
		 return r.updateDetails(newUser,id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable Long id )
	{
		r.deleteDetails(id);
		return "your item id "+ "is deleted";
	}
	
	

}
