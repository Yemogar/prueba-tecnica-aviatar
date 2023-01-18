import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { GameOptions } from '../enums/game-options.enum';
import { WinnerOptions } from '../enums/winner-options.enum';
import { GameResult } from '../models/game-result';
import { Scoreboard } from '../models/scoreboard';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private scoreboard: Scoreboard = {playerPoints: 0, computerPoints: 0};
  private gameScoreboardSubject:  BehaviorSubject<Scoreboard> = new BehaviorSubject(this.scoreboard);

  public gameScoreboard$: Observable<Scoreboard> = this.gameScoreboardSubject.asObservable();

  constructor() { }

  public playRockPaperScissors(optionSelectedByPlayer: GameOptions, optionSelectedByComputer: GameOptions): GameResult {
    let result: GameResult;

    const conditionToTie: boolean = optionSelectedByPlayer === optionSelectedByComputer;
    const conditionToPlayerWin: boolean = 
      (optionSelectedByPlayer === GameOptions.Rock && optionSelectedByComputer === GameOptions.Scissors) ||
      (optionSelectedByPlayer === GameOptions.Paper && optionSelectedByComputer === GameOptions.Rock) ||
      (optionSelectedByPlayer === GameOptions.Scissors && optionSelectedByComputer === GameOptions.Paper);

    if (conditionToTie) {
      result = {
        winner: WinnerOptions.Tie,
        reasonOfVictory: ''
      }
    } else if (conditionToPlayerWin) {
      this.increasePlayerScoreboard();
      result = {
        winner: WinnerOptions.Player,
        reasonOfVictory: optionSelectedByPlayer + ' beats ' + optionSelectedByComputer
      }
    } else {
      this.increaseComputerScoreboard();
      result = {
        winner: WinnerOptions.Computer,
        reasonOfVictory: optionSelectedByComputer + ' beats ' + optionSelectedByPlayer
      }
    }
  
    return result;
  }

  public getOptionSelectedByComputer(): GameOptions {
    const gameOptionsValues: string[] = Object.values(GameOptions);
    const randomOptionSelectedByComputer = gameOptionsValues[Math.floor(Math.random() * gameOptionsValues.length)];

    return randomOptionSelectedByComputer as GameOptions;
  }

  public increasePlayerScoreboard(): void {
    this.scoreboard.playerPoints++;
    this.gameScoreboardSubject.next(this.scoreboard);
  }

  public increaseComputerScoreboard(): void {
    this.scoreboard.computerPoints++;
    this.gameScoreboardSubject.next(this.scoreboard);
  }

  public resetScoreboard(): void {
    this.scoreboard = {playerPoints: 0, computerPoints: 0};
    this.gameScoreboardSubject.next(this.scoreboard);
  }
}
