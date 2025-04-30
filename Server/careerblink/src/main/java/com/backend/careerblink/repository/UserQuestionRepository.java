package com.backend.careerblink.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.careerblink.models.UserQuestion;

public interface UserQuestionRepository extends JpaRepository<UserQuestion,Long>{

	List<UserQuestion> findByUser_Userid(Long userId);
}
