package com.backend.careerblink.service;


import java.util.List;

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
	
	public void saveSolvedQuestion(Long questionId, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (userQuestionRepository.existsByUserIdAndQuestionId(userId, questionId)) return;

        UserQuestion userQuestion = UserQuestion.builder()
                .questionId(questionId)
                .user(user)
                .build();

        userQuestionRepository.save(userQuestion);
    }

    public void deleteSolvedQuestion(Long questionId, Long userId) {
        userQuestionRepository.deleteByUserIdAndQuestionId(userId, questionId);
    }

    public List<Long> getSolvedQuestionIds(Long userId) {
        return userQuestionRepository.findQuestionIdsByUserId(userId);
    }
	
}
