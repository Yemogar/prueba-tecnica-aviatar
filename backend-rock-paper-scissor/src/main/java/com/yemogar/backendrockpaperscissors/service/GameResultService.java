package com.yemogar.backendrockpaperscissors.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yemogar.backendrockpaperscissors.model.GameOption;
import com.yemogar.backendrockpaperscissors.model.GameResult;
import com.yemogar.backendrockpaperscissors.model.Statistic;
import com.yemogar.backendrockpaperscissors.model.WinnerOption;
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
		int numberOfTimesThatUserPickRock = this.gameResultRepository.numberOfTimesThatUserSelectAChoice(playerUsername, GameOption.ROCK.getOption());
		int numberOfTimesThatUserPickPaper = this.gameResultRepository.numberOfTimesThatUserSelectAChoice(playerUsername, GameOption.PAPER.getOption());
		int numberOfTimesThatUserPickScissor = this.gameResultRepository.numberOfTimesThatUserSelectAChoice(playerUsername, GameOption.SCISSORS.getOption());
		int numberOfTimesThatComputerPickRock = this.gameResultRepository.numberOfTimesThatComputerSelectAChoice(playerUsername, GameOption.ROCK.getOption());
		int numberOfTimesThatComputerPickPaper = this.gameResultRepository.numberOfTimesThatComputerSelectAChoice(playerUsername, GameOption.PAPER.getOption());
		int numberOfTimesThatComputerPickScissor = this.gameResultRepository.numberOfTimesThatComputerSelectAChoice(playerUsername, GameOption.SCISSORS.getOption());
		int numberOfTimesThatUserWins = this.gameResultRepository.numberOfTimesByResult(playerUsername, WinnerOption.PLAYER.getOption());
		int numberOfTimesThatUserTie = this.gameResultRepository.numberOfTimesByResult(playerUsername, WinnerOption.TIE.getOption());
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
