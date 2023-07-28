package com.example.demo.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.project.model.entity;

public interface repo extends JpaRepository<entity, Long> {

}
