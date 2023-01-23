package com.yemogar.backendrockpaperscissors.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yemogar.backendrockpaperscissors.model.GameResult;
import com.yemogar.backendrockpaperscissors.model.Statistic;
import com.yemogar.backendrockpaperscissors.services.GameResultService;

@RestController
@RequestMapping("/api/game-results")
public class GameController {
	@Autowired
	public GameResultService gameResultService;
	
	@GetMapping
	public ResponseEntity<List<GameResult>> getAllGameResultsByPlayerUsername(@RequestParam String playerUsername) {
		return new ResponseEntity<List<GameResult>>(this.gameResultService.getAllGameResultByPlayerUsername(playerUsername), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<GameResult> saveGameResult(@RequestBody GameResult gameResult) {		
		return new ResponseEntity<GameResult>(this.gameResultService.saveGameResult(gameResult), HttpStatus.OK);
	}
	
	@GetMapping("/statistics")
	public ResponseEntity<Statistic> getStatistics(@RequestParam String playerUsername) {
		return new ResponseEntity<Statistic>(this.gameResultService.getStatisticsByPlayerUsername(playerUsername), HttpStatus.OK);
	}
}
