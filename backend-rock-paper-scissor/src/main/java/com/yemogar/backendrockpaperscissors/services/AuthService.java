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
			User newUserWitPasswordEncoded = this.encodeUserPassword(newUser);

			return this.userRepository.save(newUserWitPasswordEncoded);		
		}
	}
	
	public Optional<User> getUserByUsername(String username) {
		return this.userRepository.findByUsername(username);
	}
	
	private User encodeUserPassword(User user) {
		String encodedPassword = new BCryptPasswordEncoder().encode(user.getPassword());
		user.setPassword(encodedPassword);

        return user;
	}
}
