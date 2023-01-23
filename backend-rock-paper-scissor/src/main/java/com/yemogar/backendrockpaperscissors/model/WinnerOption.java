package com.yemogar.backendrockpaperscissors.model;

public enum WinnerOption {
	PLAYER("Player"), 
    TIE("Tie"), 
    COMPUTER("Computer");

    private String option;
 
    WinnerOption(String option) {
		this.option = option;
	}
	
	public String getOption() {
        return this.option;
    }
}
