package com.yemogar.backendrockpaperscissors.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yemogar.backendrockpaperscissors.model.GameResult;

@Repository
public interface GameResultRepository extends JpaRepository<GameResult, Integer>{

	@Query(value = "SELECT * FROM game_result game WHERE game.PLAYER_USERNAME = :playerUsername", nativeQuery = true)
	List<GameResult> findByPlayerUsername(@Param("playerUsername") String playerUsername);
	
	@Query(value = "SELECT count(*) FROM game_result game WHERE game.PLAYER_USERNAME = :playerUsername", nativeQuery = true)
	int countGameResultByPlayerUsername(@Param("playerUsername") String playerUsername);
	
	@Query(value = "SELECT count(*) FROM game_result game WHERE game.PLAYER_USERNAME = :playerUsername and game.OPTION_SELECTED_BY_PLAYER = :choice", nativeQuery = true)
	int numberOfTimesThatUserSelectAChoice(@Param("playerUsername") String playerUsername, @Param("choice") String choice);
	
	@Query(value = "SELECT count(*) FROM game_result game WHERE game.PLAYER_USERNAME = :playerUsername and game.OPTION_SELECTED_BY_COMPUTER = :choice", nativeQuery = true)
	int numberOfTimesThatComputerSelectAChoice(@Param("playerUsername") String playerUsername, @Param("choice") String choice);

	@Query(value = "SELECT count(*) FROM game_result game WHERE game.PLAYER_USERNAME = :playerUsername and game.WINNER = :result", nativeQuery = true)
	int numberOfTimesByResult(@Param("playerUsername") String playerUsername, @Param("result") String result);
}
