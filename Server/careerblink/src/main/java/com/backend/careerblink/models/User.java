package com.backend.careerblink.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long userid;
	@Column(name="user_name",nullable=false)
    private String name ;
	@Column(unique=true,nullable=false)
    private String email;
	
    private String password;
//    private String profilePic;
//    //information
//    private boolean enabled=false;
//    private boolean emailVerified=false;
//    private boolean phoneVerified=false;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore   // 🔥🔥 Add this line here
    private List<UserQuestion> solvedQuestions;
}
