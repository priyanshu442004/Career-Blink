package com.backend.careerblink.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.careerblink.models.User;
import com.backend.careerblink.service.UserService;

@RestController
@RequestMapping("/user")
public class UserControllers {
	
	@Autowired
	private UserService userService; 
	
	@PostMapping("/add")
	public String add(@RequestBody User user) {
		userService.saveUser(user);
		return "New Student is added";
	}
	  @GetMapping("/all")
	    public List<User> getAllUsers() {
	        return userService.getAllStudent();
	    }
}
