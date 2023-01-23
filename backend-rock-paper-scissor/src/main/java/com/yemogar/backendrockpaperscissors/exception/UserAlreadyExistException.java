package com.yemogar.backendrockpaperscissors.exception;

public class UserAlreadyExistException extends Exception{
	public UserAlreadyExistException(String errorMessage) {
        super(errorMessage);
    }
}
