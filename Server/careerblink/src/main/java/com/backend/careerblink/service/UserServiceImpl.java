package com.backend.careerblink.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.careerblink.models.User;
import com.backend.careerblink.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired  //This will inject the UserRepo into our Service class
	private UserRepository userRepository;
	
	@Override
	public User saveUser(User user) {
		// TODO Auto-generated method stub
		return userRepository.save(user);
	}
	 @Override
	    public List<User> getAllStudent() {
	        return userRepository.findAll();  // Retrieves all users from the database
	    }
	
}
