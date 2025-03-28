package com.backend.careerblink.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.careerblink.models.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{

}
