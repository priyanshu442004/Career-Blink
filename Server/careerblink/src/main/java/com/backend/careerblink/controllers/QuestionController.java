package com.backend.careerblink.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.careerblink.models.AllQuestion;
import com.backend.careerblink.repository.QuestionRepository;

@RestController
@RequestMapping("/api/all-question")
@CrossOrigin(origins = "*")
public class QuestionController {

	private QuestionRepository questionRepository ;
	//There’s no business logic to process between controller and repository that is why no service layer is required
	public QuestionController(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}
	
	@GetMapping
	public List<AllQuestion> getAllQuestion(){
		return questionRepository.findAll();
	}
	  // Optional: You could also add endpoints for:
    // - Getting a single question by ID
    // - Adding new questions manually
    // - Deleting or updating a question
}
