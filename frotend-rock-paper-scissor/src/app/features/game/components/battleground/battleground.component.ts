import { Component, Input } from '@angular/core';

import { GameOptions } from '../../enums/game-options.enum';
import { GameResult } from '../../models/game-result';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.sass']
})
export class BattlegroundComponent {
  @Input()
  optionSelectedByPlayer: GameOptions | undefined;

  @Input()
  optionSelectedByComputer: GameOptions | undefined;

  @Input()
  gameResult: GameResult | undefined;

  public get gameOptions(): typeof GameOptions {
    return GameOptions; 
  }

}
