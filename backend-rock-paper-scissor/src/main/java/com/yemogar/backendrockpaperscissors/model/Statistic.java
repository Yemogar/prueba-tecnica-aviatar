package com.yemogar.backendrockpaperscissors.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
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
}
