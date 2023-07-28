package com.example.demo.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.project.entity.entity;
import com.example.demo.project.entity.signup;
import com.example.demo.project.repo.repo;
import com.example.demo.project.repo.signuprepo;


@Service
public class service {
	
	@Autowired 
	repo r;
	signuprepo  rr;
	public boolean addEmployee(entity employee)

	{
	return r.save(employee)!=null?true:false;
	}
	public List <entity> getAllEmployees()
	{
	return r.findAll();
	}
	public entity getEmployeeById(int id)
	{
	return r.findById(id).get();
	}
	public boolean addEmployee(signup employee) {
		
		return rr.save(employee)!=null?true:false;
	}
}
