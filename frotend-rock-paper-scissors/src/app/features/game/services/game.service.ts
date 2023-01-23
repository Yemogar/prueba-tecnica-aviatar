import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { UserLogin } from 'src/app/authentication/models/user-login';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { environment } from 'src/environments/environment.development';

import { GameOptions } from '../enums/game-options.enum';
import { WinnerOptions } from '../enums/winner-options.enum';
import { GameResult } from '../models/game-result';
import { Scoreboard } from '../models/scoreboard';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl: string = environment.apiUrl + '/game-results';

  private scoreboard: Scoreboard = {playerPoints: 0, computerPoints: 0};
  private gameScoreboardSubject:  BehaviorSubject<Scoreboard> = new BehaviorSubject(this.scoreboard);

  public gameScoreboard$: Observable<Scoreboard> = this.gameScoreboardSubject.asObservable();

  constructor(private httpService: HttpClient, private authService: AuthenticationService) { }

  public playRockPaperScissors(optionSelectedByPlayer: GameOptions, optionSelectedByComputer: GameOptions): GameResult {
    let result: GameResult = {
      optionSelectedByComputer: optionSelectedByComputer,
      optionSelectedByPlayer: optionSelectedByPlayer
    };

    const conditionToTie: boolean = optionSelectedByPlayer === optionSelectedByComputer;
    const conditionToPlayerWin: boolean = 
      (optionSelectedByPlayer === GameOptions.Rock && optionSelectedByComputer === GameOptions.Scissors) ||
      (optionSelectedByPlayer === GameOptions.Paper && optionSelectedByComputer === GameOptions.Rock) ||
      (optionSelectedByPlayer === GameOptions.Scissors && optionSelectedByComputer === GameOptions.Paper);

    if (conditionToTie) {
      result = {
        ...result,
        winner: WinnerOptions.Tie,
        reasonOfVictory: ''
      }
    } else if (conditionToPlayerWin) {
      this.increasePlayerScoreboard();
      result = {
        ...result,
        winner: WinnerOptions.Player,
        reasonOfVictory: optionSelectedByPlayer + ' beats ' + optionSelectedByComputer
      }
    } else {
      this.increaseComputerScoreboard();
      result = {
        ...result,
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

  public saveGameResult(gameResult: GameResult): Observable<GameResult> {
    return this.authService.userLogged$
      .pipe(
        switchMap(
          (currentUser: UserLogin) => {
            gameResult.playerUsername = currentUser.username;
            return this.httpService.post(this.apiUrl, gameResult);
          }
        )
      );
  }
}
