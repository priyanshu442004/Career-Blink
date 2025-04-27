package com.backend.careerblink.models;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginRequest {
	
	private String email;
	private String password;
	
//	public String getEmail() {
//		return email;
//	}
//	public String getPassword() {
//		return password; 
//	}
//	
//	public void setEmail(String newEmail) {
//		this.email = newEmail;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
}
