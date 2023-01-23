import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameResult } from '../game/models/game-result';
import { StatisticsService } from './services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit, OnDestroy{
  gameResults: GameResult[] = [];

  private gameResultsSubscription: Subscription | undefined;

  constructor(private statisticsService: StatisticsService, private router: Router) {
  }

  ngOnDestroy(): void {
    this.gameResultsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.gameResultsSubscription = this.statisticsService.getGameResultsByUsername()
      .subscribe(
        (gameResults) => {
          this.gameResults = gameResults;
        }
      )
  }

  public goBack(): void {
    this.router.navigateByUrl('/menu');
  }
}
