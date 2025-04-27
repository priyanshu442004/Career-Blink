package com.backend.careerblink.service;

import com.backend.careerblink.models.LoginRequest;
import com.backend.careerblink.models.User;

public interface UserService {

	public User saveUser(User user);
	public User authenticateUser(LoginRequest loginRequest);
}
