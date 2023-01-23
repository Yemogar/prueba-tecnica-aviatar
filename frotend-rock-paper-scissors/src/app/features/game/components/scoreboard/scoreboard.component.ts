import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/authentication/models/user-login';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { Scoreboard } from '../../models/scoreboard';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.sass']
})
export class ScoreboardComponent implements OnInit{

  public gameScoreboard$: Observable<Scoreboard> | undefined;
  public userLogged$: Observable<UserLogin> | undefined;

  constructor(private gameService: GameService, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.loadUsername();
    this.loadScoreboard();
  }

  public loadScoreboard(): void {
    this.gameScoreboard$ = this.gameService.gameScoreboard$;
  }

  public loadUsername(): void {
    this.userLogged$ = this.authService.userLogged$;
  }
}
