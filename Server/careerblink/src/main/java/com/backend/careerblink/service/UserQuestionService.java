package com.backend.careerblink.service;


import org.springframework.stereotype.Service;

import com.backend.careerblink.models.User;
import com.backend.careerblink.models.UserQuestion;
import com.backend.careerblink.repository.UserQuestionRepository;
import com.backend.careerblink.repository.UserRepository;

@Service
public class UserQuestionService {
	
	private final UserQuestionRepository userQuestionRepository ;
    private final UserRepository userRepository;
	public UserQuestionService(UserQuestionRepository userQuestionRepository,UserRepository userRepository){
		this.userQuestionRepository = userQuestionRepository;
		this.userRepository = userRepository;
	}
	
	public UserQuestion saveSolvedQuestion(UserQuestion solvedQuestion,Long userId) {
		User user = userRepository.findById(userId)
				    .orElseThrow(() -> new RuntimeException ("User not find"));
		solvedQuestion.setUser(user);
		return userQuestionRepository.save(solvedQuestion);
	}
}
