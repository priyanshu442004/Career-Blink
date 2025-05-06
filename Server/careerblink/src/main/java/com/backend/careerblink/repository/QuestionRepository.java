package com.backend.careerblink.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.careerblink.models.AllQuestion;

public interface QuestionRepository extends JpaRepository<AllQuestion , Long> {

}
