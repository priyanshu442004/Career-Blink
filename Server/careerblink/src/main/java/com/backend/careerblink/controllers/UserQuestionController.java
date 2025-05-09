package com.backend.careerblink.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.careerblink.dtos.QuestionRequest;
import com.backend.careerblink.models.UserQuestion;
import com.backend.careerblink.service.UserQuestionService;

@RestController
@RequestMapping("api/question")
@CrossOrigin(origins = "*") // Allow fronted connection
public class UserQuestionController {

	private UserQuestionService userQuestionService ;
	
	public UserQuestionController(UserQuestionService userQuestionService) {
		this.userQuestionService = userQuestionService;
	}
	
	 
	 @PostMapping("/toggle")
	    public ResponseEntity<String> toggleSolvedQuestion(@RequestBody QuestionRequest request) {
	        if (request.isSolved()) {
	            userQuestionService.saveSolvedQuestion(request.getQuestionId(), request.getUserId());
	        } else {
	            userQuestionService.deleteSolvedQuestion(request.getQuestionId(), request.getUserId());
	        }
	        return ResponseEntity.ok("Updated");
	    }

	    @GetMapping("/solved/{userId}")
	    public ResponseEntity<List<Long>> getSolvedQuestions(@PathVariable Long userId) {
	        return ResponseEntity.ok(userQuestionService.getSolvedQuestionIds(userId));
	    }
}
