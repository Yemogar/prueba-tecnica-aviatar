package com.yemogar.backendrockpaperscissors.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "GAME_RESULT")
public class GameResult {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="WINNER")
	private String winner;
	
	@Column(name="OPTION_SELECTED_BY_PLAYER")
	private String optionSelectedByPlayer;
	
	@Column(name="OPTION_SELECTED_BY_COMPUTER")
	private String optionSelectedByComputer;
	
	@Column(name="PLAYER_USERNAME")
	private String playerUsername;

	public GameResult(Integer id, String winner, String optionSelectedByPlayer, String optionSelectedByComputer,
			String playerUsername) {
		super();
		this.id = id;
		this.winner = winner;
		this.optionSelectedByPlayer = optionSelectedByPlayer;
		this.optionSelectedByComputer = optionSelectedByComputer;
		this.playerUsername = playerUsername;
	}
	
	public GameResult() {
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getWinner() {
		return winner;
	}

	public void setWinner(String winner) {
		this.winner = winner;
	}

	public String getOptionSelectedByPlayer() {
		return optionSelectedByPlayer;
	}

	public void setOptionSelectedByPlayer(String optionSelectedByPlayer) {
		this.optionSelectedByPlayer = optionSelectedByPlayer;
	}

	public String getOptionSelectedByComputer() {
		return optionSelectedByComputer;
	}

	public void setOptionSelectedByComputer(String optionSelectedByComputer) {
		this.optionSelectedByComputer = optionSelectedByComputer;
	}

	public String getPlayerUsername() {
		return playerUsername;
	}

	public void setPlayerUsername(String playerUsername) {
		this.playerUsername = playerUsername;
	}
}
