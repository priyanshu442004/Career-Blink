package com.backend.careerblink.exception;

public class EmailDoesNotExistsException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;

	public EmailDoesNotExistsException(String message) {
		super(message);
	}
}
