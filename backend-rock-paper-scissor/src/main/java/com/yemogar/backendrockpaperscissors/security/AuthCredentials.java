package com.yemogar.backendrockpaperscissors.security;

public class AuthCredentials {
	private String username;
	private String password;

	public AuthCredentials(String username, String password) {
		this.username = username;
		this.password = password;
	}

	public AuthCredentials() {
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
