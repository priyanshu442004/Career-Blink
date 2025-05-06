package com.backend.careerblink.service;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.careerblink.dtos.LoginRequest;
import com.backend.careerblink.exception.EmailAlreadyExistsException;
import com.backend.careerblink.exception.EmailDoesNotExistsException;
import com.backend.careerblink.exception.PasswordDoesNotMatchException;
import com.backend.careerblink.models.User;
import com.backend.careerblink.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired  //This will inject the UserRepo into our Service class
	private UserRepository userRepository;
	
	@Override
	public User saveUser(@RequestBody User user) {
		// TODO Auto-generated method stub
		if(userRepository.existsByEmail(user.getEmail())){
			throw new EmailAlreadyExistsException("Email already exists");
		}
		return userRepository.save(user);
	}
	
	@Override
	public User authenticateUser(LoginRequest loginRequest) {
		Optional<User> userOpt = userRepository.findByEmail(loginRequest.getEmail());
			if(userOpt.isEmpty()) {
				throw new EmailDoesNotExistsException("Email does not Exist");
			}
			User user = userOpt.get();
			if(!user.getPassword().equals(loginRequest.getPassword())) {
				throw new PasswordDoesNotMatchException("You have Entered the Wrong Password");
			};
			return user;
	}
}
