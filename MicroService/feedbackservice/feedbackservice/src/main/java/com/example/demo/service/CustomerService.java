package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.CustomerSupport;
import com.example.demo.repository.CustomerRepo;

@Service
public class CustomerService {

	@Autowired
	CustomerRepo crepo;
	
	public String addSupport(CustomerSupport e) {
		crepo.save(e);
		return "successfully Added";
	}
}
