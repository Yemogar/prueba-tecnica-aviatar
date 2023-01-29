package com.yemogar.backendrockpaperscissors.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.yemogar.backendrockpaperscissors.model.User;

@ControllerAdvice
public class CustomExceptionHandler {

	@ExceptionHandler(UserAlreadyExistException.class)
    public ResponseEntity<User> handleUserAlreadyExist(UserAlreadyExistException ex) {
        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }
}
