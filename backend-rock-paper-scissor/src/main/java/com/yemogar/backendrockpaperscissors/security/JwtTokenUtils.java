package com.yemogar.backendrockpaperscissors.security;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

public class JwtTokenUtils {
	
	private final static String TOKEN_SEED = "4qhq8LrEBfYcaRHxhdb9zURb2rf8e7Ud";
	
	public static String createToken(String username) {
		Map<String, Object> claims = new HashMap<>();
		
		return Jwts.builder()
				.setClaims(claims)
				.setSubject(username)
				.signWith(Keys.hmacShaKeyFor(TOKEN_SEED.getBytes()))
				.compact();
	}
	
	public static UsernamePasswordAuthenticationToken getAuthentication(String token) {
		try {
			Claims claims = Jwts
					.parserBuilder()
					.setSigningKey(TOKEN_SEED.getBytes())
					.build()
					.parseClaimsJws(token)
					.getBody();

			String username = claims.getSubject();
			
			return new UsernamePasswordAuthenticationToken(username, null, Collections.emptyList());
		} catch (JwtException exception) {
			return null;
		}
	}
}
