package com.backend.careerblink.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private int userid;
	@Column(name="user_name",nullable=false)
    private String name ;
	@Column(unique=true,nullable=false)
    private String email;
	
    private String password;
    private String profilePic;
    //information
    private boolean enabled=false;
    private boolean emailVerified=false;
    private boolean phoneVerified=false;
    

 @Enumerated(EnumType.STRING) // Store as a string in the database
 private Providers provider = Providers.SELF;

 @Enumerated(EnumType.STRING) // Store as a string in the database
 private Providers providerUserId;
}
