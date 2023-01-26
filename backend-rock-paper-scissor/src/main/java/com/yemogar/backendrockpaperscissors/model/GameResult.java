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
@Table(name = "game_results")
public class GameResult {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="winner")
	private String winner;
	
	@Column(name="option_selected_by_player")
	private String optionSelectedByPlayer;
	
	@Column(name="option_selected_by_computer")
	private String optionSelectedByComputer;
	
	@Column(name="player_username")
	private String playerUsername;
}
