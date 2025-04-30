package com.backend.careerblink.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.careerblink.models.UserQuestion;
import com.backend.careerblink.service.UserQuestionService;

import DTOs.QuestionRequest;

@RestController
@RequestMapping("api/question")
@CrossOrigin(origins = "*") // Allow fronted connection
public class UserQuestionController {

	private UserQuestionService userQuestionService ;
	
	public UserQuestionController(UserQuestionService userQuestionService) {
		this.userQuestionService = userQuestionService;
	}
	
	 @PostMapping("/save")
	    public UserQuestion saveSolvedQuestion(@RequestBody QuestionRequest request) {
		 UserQuestion solvedQuestion = UserQuestion.builder()
	                .questionId(request.getQuestionId())
	                .difficulty(request.getDifficulty())
	                .build();
	        return userQuestionService.saveSolvedQuestion(solvedQuestion, request.getUserId());
	    }

}
