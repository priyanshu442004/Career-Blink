package com.backend.careerblink.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying; // Import Modifying
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional; // Import Transactional

import com.backend.careerblink.models.UserQuestion;

public interface UserQuestionRepository extends JpaRepository<UserQuestion, Long> {
    @Query("SELECT COUNT(uq) > 0 FROM UserQuestion uq WHERE uq.user.userid = :userId AND uq.questionId = :questionId")
    boolean existsByUserIdAndQuestionId(@Param("userId") Long userId, @Param("questionId") Long questionId);

    @Modifying // Add Modifying annotation
    @Transactional // Add Transactional annotation
    @Query("DELETE FROM UserQuestion uq WHERE uq.user.userid = :userId AND uq.questionId = :questionId")
    void deleteByUserIdAndQuestionId(@Param("userId") Long userId, @Param("questionId") Long questionId);

    @Query("SELECT uq.questionId FROM UserQuestion uq WHERE uq.user.userid = :userId")
    List<Long> findQuestionIdsByUserId(@Param("userId") Long userId);
}
