package com.backend.careerblink.service;

import java.util.List;

import com.backend.careerblink.models.User;

public interface UserService {

	public User saveUser(User user);
	public List<User> getAllStudent();
}
