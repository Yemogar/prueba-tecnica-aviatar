import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Scoreboard } from '../../models/scoreboard';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.sass']
})
export class ScoreboardComponent implements OnInit{

  public gameScoreboard$: Observable<Scoreboard> | undefined;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.loadScoreboard();
  }

  public loadScoreboard(): void {
    this.gameScoreboard$ = this.gameService.gameScoreboard$;
  }
}
