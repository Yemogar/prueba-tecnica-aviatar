package com.yemogar.backendrockpaperscissors.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.yemogar.backendrockpaperscissors.model.User;
import com.yemogar.backendrockpaperscissors.model.UserDetailsImpl;
import com.yemogar.backendrockpaperscissors.repository.UserRepository;

@Service
public class UserDetailService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username)
			.orElseThrow(() -> new UsernameNotFoundException("The user with username " + username + " doesn't exist."));
    
		return new UserDetailsImpl(user);
	}
}
