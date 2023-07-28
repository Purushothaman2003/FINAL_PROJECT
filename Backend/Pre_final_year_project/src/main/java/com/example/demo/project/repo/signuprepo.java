package com.example.demo.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.project.entity.signup;

public interface signuprepo extends JpaRepository<signup, String> {

}
