package com.backend.careerblink.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.careerblink.dtos.LoginRequest;
import com.backend.careerblink.models.User;
import com.backend.careerblink.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserControllers {
	
	@Autowired
	private UserService userService; 
	
	@PostMapping("/add")
	public String add(@RequestBody User user) {
		userService.saveUser(user);
		return "New Student is added";
	}
	@PostMapping("/api/auth/login")
	public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest){
		User user=userService.authenticateUser(loginRequest);
			return ResponseEntity.ok(user.getName());
		}
	}
