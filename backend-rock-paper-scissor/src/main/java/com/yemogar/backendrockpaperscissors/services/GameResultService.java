package com.yemogar.backendrockpaperscissors.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yemogar.backendrockpaperscissors.model.GameResult;
import com.yemogar.backendrockpaperscissors.model.Statistic;
import com.yemogar.backendrockpaperscissors.repository.GameResultRepository;

@Service
public class GameResultService {
	
	@Autowired
	private GameResultRepository gameResultRepository;
	
	public List<GameResult> getAllGameResults() {
		return this.gameResultRepository.findAll();	
	}
	
	public List<GameResult> getAllGameResultByPlayerUsername(String playerUsername) {
		return this.gameResultRepository.findByPlayerUsername(playerUsername);
	}

	public GameResult saveGameResult(GameResult gameResult) {		
		return this.gameResultRepository.save(gameResult);
	}
	
	public Statistic getStatisticsByPlayerUsername(String playerUsername) {
		int numberOfTimesThatUserPickRock = this.gameResultRepository.numberOfTimesThatUserSelectAChoice(playerUsername, "Rock");
		int numberOfTimesThatUserPickPaper = this.gameResultRepository.numberOfTimesThatUserSelectAChoice(playerUsername, "Paper");
		int numberOfTimesThatUserPickScissor = this.gameResultRepository.numberOfTimesThatUserSelectAChoice(playerUsername, "Scissors");
		int numberOfTimesThatComputerPickRock = this.gameResultRepository.numberOfTimesThatComputerSelectAChoice(playerUsername, "Rock");
		int numberOfTimesThatComputerPickPaper = this.gameResultRepository.numberOfTimesThatComputerSelectAChoice(playerUsername, "Paper");
		int numberOfTimesThatComputerPickScissor = this.gameResultRepository.numberOfTimesThatComputerSelectAChoice(playerUsername, "Scissors");
		int numberOfTimesThatUserWins = this.gameResultRepository.numberOfTimesByResult(playerUsername, "Player");
		int numberOfTimesThatUserTie = this.gameResultRepository.numberOfTimesByResult(playerUsername, "Tie");
		int numberOfTimesThatUserLose = this.gameResultRepository.countGameResultByPlayerUsername(playerUsername) - numberOfTimesThatUserWins - numberOfTimesThatUserTie;
	
		return new Statistic(
				numberOfTimesThatUserWins,
				numberOfTimesThatUserTie,
				numberOfTimesThatUserLose,
				numberOfTimesThatUserPickRock,
				numberOfTimesThatUserPickPaper,
				numberOfTimesThatUserPickScissor,
				numberOfTimesThatComputerPickRock,
				numberOfTimesThatComputerPickPaper,
				numberOfTimesThatComputerPickScissor
				);	
	}

}
