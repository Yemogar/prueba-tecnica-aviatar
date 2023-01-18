import { Component, EventEmitter, Output } from '@angular/core';

import { GameOptions } from '../../enums/game-options.enum';

@Component({
  selector: 'app-rock-paper-scissors-selector',
  templateUrl: './rock-paper-scissors-selector.component.html',
  styleUrls: ['./rock-paper-scissors-selector.component.sass']
})
export class RockPaperScissorsSelectorComponent {
  @Output() 
  optionSelectedByPlayer = new EventEmitter<GameOptions>();

  @Output() 
  resetGameByPlayer = new EventEmitter();

  @Output() 
  onClickBackButton = new EventEmitter();

  public selectOption(option: GameOptions): void {
    this.optionSelectedByPlayer.emit(option);
  }

  public resetGame(): void {
    this.resetGameByPlayer.emit();
  }

  public backButton(): void {
    this.onClickBackButton.emit();
  }

  public get gameOptions(): typeof GameOptions {
    return GameOptions; 
  }
}
