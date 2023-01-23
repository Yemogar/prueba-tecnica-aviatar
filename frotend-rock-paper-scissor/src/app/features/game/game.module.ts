import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game-routing.module';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { RockPaperScissorsSelectorComponent } from './components/rock-paper-scissors-selector/rock-paper-scissors-selector.component';



@NgModule({
  declarations: [
    GameComponent,
    ScoreboardComponent,
    BattlegroundComponent,
    RockPaperScissorsSelectorComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
