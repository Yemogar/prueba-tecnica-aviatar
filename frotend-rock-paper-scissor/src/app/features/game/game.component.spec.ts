import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { RockPaperScissorsSelectorComponent } from './components/rock-paper-scissors-selector/rock-paper-scissors-selector.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ GameComponent, ScoreboardComponent, RockPaperScissorsSelectorComponent, BattlegroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
