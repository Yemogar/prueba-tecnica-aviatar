package com.yemogar.backendrockpaperscissors.model;

public class Statistic {
	public int numberOfGameThatUserWin;

	public int numberOfGameThatUserTie;
	
	public int numberOfGameThatUserLose;
	
	public int numberOfTimesThatUserPickRock;
	
	public int numberOfTimesThatUserPickPaper;
	
	public int numberOfTimesThatUserPickScissor;
	
	public int numberOfTimesThatComputerPickRock;
	
	public int numberOfTimesThatComputerPickPaper;
	
	public int numberOfTimesThatComputerPickScissor;
	
	public Statistic() {
		
	}

	public Statistic(int numberOfGameThatUserWin, int numberOfGameThatUserTie,
			int numberOfGameThatUserLose, int numberOfTimesThatUsersPickRock, int numberOfTimesThatUsersPickPaper,
			int numberOfTimesThatUsersPickScissor, int numberOfTimesThatComputerPickRock,
			int numberOfTimesThatComputerPickPaper, int numberOfTimesThatComputerPickScissor) {
		super();
		this.numberOfGameThatUserWin = numberOfGameThatUserWin;
		this.numberOfGameThatUserTie = numberOfGameThatUserTie;
		this.numberOfGameThatUserLose = numberOfGameThatUserLose;
		this.numberOfTimesThatUserPickRock = numberOfTimesThatUsersPickRock;
		this.numberOfTimesThatUserPickPaper = numberOfTimesThatUsersPickPaper;
		this.numberOfTimesThatUserPickScissor = numberOfTimesThatUsersPickScissor;
		this.numberOfTimesThatComputerPickRock = numberOfTimesThatComputerPickRock;
		this.numberOfTimesThatComputerPickPaper = numberOfTimesThatComputerPickPaper;
		this.numberOfTimesThatComputerPickScissor = numberOfTimesThatComputerPickScissor;
	}
}
