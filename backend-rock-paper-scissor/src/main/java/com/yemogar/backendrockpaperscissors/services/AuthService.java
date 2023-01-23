package com.yemogar.backendrockpaperscissors.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.yemogar.backendrockpaperscissors.exception.UserAlreadyExistException;
import com.yemogar.backendrockpaperscissors.model.User;
import com.yemogar.backendrockpaperscissors.repository.UserRepository;

@Service
public class AuthService {
	
	@Autowired
	private UserRepository userRepository;

	public User registerUser(User newUser) throws UserAlreadyExistException {
		boolean usernameAlreadyExist = this.userRepository.findByUsername(newUser.getUsername()).isPresent();
		if (usernameAlreadyExist) {
			throw new UserAlreadyExistException("User already exist");
		} else {
			String encodedPassword = new BCryptPasswordEncoder().encode(newUser.getPassword());
	        newUser.setPassword(encodedPassword);

			return this.userRepository.save(newUser);		
		}
	}
	
	public Optional<User> getUserByUsername(String username) {
		return this.userRepository.findByUsername(username);
	}
}
