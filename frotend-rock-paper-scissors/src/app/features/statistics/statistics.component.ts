import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameResult } from '../game/models/game-result';
import { StatisticsCharts } from './models/statistics-charts';
import { StatisticsService } from './services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit{
  gameResults$!: Observable<GameResult[]>;
  statisticsForCharts$!: Observable<StatisticsCharts>;

  dataForChartChoices: Object[] = [];
  dataForChartResults: Object[] = [];

  constructor(private statisticsService: StatisticsService, private router: Router) {
  }

  ngOnInit(): void {
    this.gameResults$ = this.statisticsService.getGameResultsByUsername();
    this.statisticsForCharts$ = this.statisticsService.getStatisticsForCharts();
  }

  public goBack(): void {
    this.router.navigateByUrl('/menu');
  }
}
