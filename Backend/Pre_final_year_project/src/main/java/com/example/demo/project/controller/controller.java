package com.example.demo.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.project.entity.entity;
import com.example.demo.project.entity.signup;
import com.example.demo.project.service.service;

@RestController
@CrossOrigin("http://localhost:3000")
public class controller {
	@Autowired
	
	service s;

	
	@PostMapping("/post")
	public boolean addEmployee(@RequestBody entity employee)
	{
	return s.addEmployee(employee);
	}
	@GetMapping("/get")
	public List <entity> getAllEmployees()
	{
	return s.getAllEmployees();
	}
	@GetMapping("/{id}")
	public entity getEmployeeById(@PathVariable int id)
	{
	return s.getEmployeeById(id);
	}
	
	

	@PostMapping("/post1")
	public boolean addEmployee(@RequestBody signup employee)
	{
	return s.addEmployee(employee);
	}
	

}
