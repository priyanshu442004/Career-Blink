package com.backend.careerblink.exception;

public class PasswordDoesNotMatchException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public PasswordDoesNotMatchException(String message) {
		super(message);
	}

}
