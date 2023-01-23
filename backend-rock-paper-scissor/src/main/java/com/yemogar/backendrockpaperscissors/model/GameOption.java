package com.yemogar.backendrockpaperscissors.model;

public enum GameOption {
	ROCK("Rock"), 
    PAPER("Paper"), 
    SCISSORS("Scissors");

    private String option;
 
	GameOption(String option) {
		this.option = option;
	}
	
	public String getOption() {
        return this.option;
    }
}
