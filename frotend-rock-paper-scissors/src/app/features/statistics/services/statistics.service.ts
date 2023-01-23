import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { UserLogin } from 'src/app/authentication/models/user-login';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

import { environment } from 'src/environments/environment';
import { GameResult } from '../../game/models/game-result';
import { Statistic } from '../models/statistic';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private apiUrl: string = environment.apiUrl + '/game-results';

  constructor(private httpService: HttpClient, private authService: AuthenticationService) { }

  getGameResultsByUsername(): Observable<GameResult[]> {
    return this.authService.userLogged$
      .pipe(
        switchMap(
          (currentUser: UserLogin) => {
            return this.httpService.get(this.apiUrl + `?playerUsername=${currentUser.username}`);
          }
        )
      ) as Observable<GameResult[]>;
  }

  getStatisticsByUsername(): Observable<Statistic> {
    return this.authService.userLogged$
      .pipe(
        switchMap(
          (currentUser: UserLogin) => {
            return this.httpService.get(this.apiUrl + '/statistics' + `?playerUsername=${currentUser.username}`);
          }
        )
      ) as Observable<Statistic>;
  }

  loadDataForChartChoices(statistic: Statistic) {
    return [
      {
        name: 'Player',
        series: [
          {
            name: 'Rock',
            value: statistic.numberOfTimesThatUserPickRock
          },
          {
            name: 'Paper',
            value: statistic.numberOfTimesThatUserPickPaper
          },
          {
            name: 'Scissor',
            value: statistic.numberOfTimesThatUserPickScissor
          }
        ]
      },
      {
        name: 'Computer',
        series: [
          {
            name: 'Rock',
            value: statistic.numberOfTimesThatComputerPickRock
          },
          {
            name: 'Paper',
            value: statistic.numberOfTimesThatComputerPickPaper
          },
          {
            name: 'Scissor',
            value: statistic.numberOfTimesThatComputerPickScissor
          }
        ]
      }
    ];
  }

  loadDataForChartResults(statistic: Statistic) {
    return [
      {
        name: 'Player',
        series: [
          {
            name: 'Win',
            value: statistic.numberOfGameThatUserWin
          },
          {
            name: 'Lose',
            value: statistic.numberOfGameThatUserLose
          },
          {
            name: 'Tie',
            value: statistic.numberOfGameThatUserTie
          }
        ]
      }
    ];
  }
}
