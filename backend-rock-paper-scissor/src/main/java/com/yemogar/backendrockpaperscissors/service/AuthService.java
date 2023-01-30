package com.yemogar.backendrockpaperscissors.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.yemogar.backendrockpaperscissors.exception.UserAlreadyExistException;
import com.yemogar.backendrockpaperscissors.model.User;
import com.yemogar.backendrockpaperscissors.repository.UserRepository;
import com.yemogar.backendrockpaperscissors.security.UserDetailsImpl;

@Service
public class AuthService implements UserDetailsService {
	
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
	
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username)
			.orElseThrow(() -> new UsernameNotFoundException("The user with username " + username + " doesn't exist."));
    
		return new UserDetailsImpl(user);
	}
	
	private User encodeUserPassword(User user) {
		String encodedPassword = new BCryptPasswordEncoder().encode(user.getPassword());
		user.setPassword(encodedPassword);

        return user;
	}
}
