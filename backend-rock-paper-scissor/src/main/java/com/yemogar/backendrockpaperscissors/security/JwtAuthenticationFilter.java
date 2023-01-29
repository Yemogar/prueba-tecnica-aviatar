package com.yemogar.backendrockpaperscissors.security;

import java.io.IOException;
import java.util.Collections;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yemogar.backendrockpaperscissors.model.UserCredentials;
import com.yemogar.backendrockpaperscissors.model.UserDetailsImpl;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request,
			HttpServletResponse response) throws AuthenticationException {
		UserCredentials authCredentials = new UserCredentials();
		
		try {
			authCredentials = new ObjectMapper().readValue(request.getReader(), UserCredentials.class);
		} catch (IOException e) {}

		UsernamePasswordAuthenticationToken usernamePAT = new UsernamePasswordAuthenticationToken(
				authCredentials.getUsername(),
				authCredentials.getPassword(),
				Collections.emptyList()
		);
		
		return getAuthenticationManager().authenticate(usernamePAT);
	}
	
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {

		UserDetailsImpl userDetails = (UserDetailsImpl) authResult.getPrincipal();
		String token = JwtTokenUtils.createToken(userDetails.getUsername());
	
		response.addHeader("Authorization", "Bearer " + token);
		response.getWriter().flush();

		super.successfulAuthentication(request, response, chain, authResult);
	}
}
