import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';

import { UserLogin } from 'src/app/authentication/models/user-login';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { environment } from 'src/environments/environment';
import { GameResult } from '../../game/models/game-result';
import { GameOptions } from '../../game/enums/game-options.enum';
import { WinnerOptions } from '../../game/enums/winner-options.enum';
import { Statistic } from '../models/statistic';
import { StatisticsCharts } from '../models/statistics-charts';

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

  getStatisticsForCharts(): Observable<StatisticsCharts> {
    return this.getStatisticsByUsername()
      .pipe(
        map((statistic: Statistic) => {
          return {
            dataForChartChoice: this.loadDataForChartChoices(statistic),
            dataForChartResults: this.loadDataForChartResults(statistic)
          }
        })
      );
  }

  loadDataForChartChoices(statistic: Statistic): Object[] {
    return [
      {
        name: WinnerOptions.Player,
        series: [
          {
            name: GameOptions.Rock,
            value: statistic.numberOfTimesThatUserPickRock
          },
          {
            name: GameOptions.Paper,
            value: statistic.numberOfTimesThatUserPickPaper
          },
          {
            name: GameOptions.Scissors,
            value: statistic.numberOfTimesThatUserPickScissor
          }
        ]
      },
      {
        name: WinnerOptions.Computer,
        series: [
          {
            name: GameOptions.Rock,
            value: statistic.numberOfTimesThatComputerPickRock
          },
          {
            name: GameOptions.Paper,
            value: statistic.numberOfTimesThatComputerPickPaper
          },
          {
            name: GameOptions.Scissors,
            value: statistic.numberOfTimesThatComputerPickScissor
          }
        ]
      }
    ];
  }

  loadDataForChartResults(statistic: Statistic): Object[] {
    return [
      {
        name: WinnerOptions.Player,
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
