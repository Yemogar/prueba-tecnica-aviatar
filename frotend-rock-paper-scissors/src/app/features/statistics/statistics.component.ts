import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameResult } from '../game/models/game-result';
import { StatisticsService } from './services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit{
  gameResults$!: Observable<GameResult[] | null>;

  constructor(private statisticsService: StatisticsService, private router: Router) {
  }

  ngOnInit(): void {
    this.gameResults$ = this.statisticsService.getGameResultsByUsername();
  }

  public goBack(): void {
    this.router.navigateByUrl('/menu');
  }
}
