package com.backend.careerblink.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.careerblink.models.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
	boolean existsByEmail(String email);
	Optional<User> findByEmail(String email);
}
