package com.yemogar.backendrockpaperscissors.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yemogar.backendrockpaperscissors.exception.CustomExceptionHandler;
import com.yemogar.backendrockpaperscissors.exception.UserAlreadyExistException;
import com.yemogar.backendrockpaperscissors.model.User;
import com.yemogar.backendrockpaperscissors.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@Autowired
	private CustomExceptionHandler customExceptionHandler;

	@Autowired
	private AuthService authService;
	
	@PostMapping("/register")
	public ResponseEntity<User> registerUser(@RequestBody User newUser) {
		try {
			return new ResponseEntity<User>(this.authService.registerUser(newUser), HttpStatus.CREATED);
		} catch (UserAlreadyExistException exception) {
			return this.customExceptionHandler.handleUserAlreadyExist(exception);
		}
	}
}
