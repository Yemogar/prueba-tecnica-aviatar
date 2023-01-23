import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { GameOptions } from './enums/game-options.enum';
import { GameResult } from './models/game-result';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnDestroy {
  optionSelectedByPlayer: GameOptions | undefined;
  optionSelectedByComputer: GameOptions | undefined;

  gameResult: GameResult | undefined;

  private savedGameSubscriptions: Subscription[] = [];

  constructor(private gameService: GameService, private router: Router){}

  ngOnDestroy(): void {
    this.savedGameSubscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  public onOptionSelectedByPlayer(optionSelectedByPlayer: GameOptions): void {
    this.optionSelectedByPlayer = optionSelectedByPlayer;
  
    this.optionSelectedByComputer = this.gameService.getOptionSelectedByComputer();

    this.gameResult = this.gameService.playRockPaperScissors(this.optionSelectedByPlayer, this.optionSelectedByComputer);

    this.savedGameSubscriptions?.push(this.gameService.saveGameResult(this.gameResult).subscribe());
  }

  public onResetGameByPlayer(event: unknown): void {
    this.optionSelectedByPlayer = undefined;
    this.optionSelectedByComputer = undefined;
    this.gameResult = undefined;

    this.gameService.resetScoreboard();
  }

  public onClickBackButton(event: unknown): void {
    this.router.navigateByUrl('/menu');
  }
}
