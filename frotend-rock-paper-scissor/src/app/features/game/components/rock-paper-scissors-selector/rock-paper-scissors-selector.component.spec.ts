import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { GameOptions } from '../../enums/game-options.enum';

import { RockPaperScissorsSelectorComponent } from './rock-paper-scissors-selector.component';

describe('RockPaperScissorsSelectorComponent', () => {
  let component: RockPaperScissorsSelectorComponent;
  let fixture: ComponentFixture<RockPaperScissorsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockPaperScissorsSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RockPaperScissorsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raise the option selected by the player when clicks', () => {
    component.optionSelectedByPlayer
      .pipe(
        first()
      )
      .subscribe((optionSelectedByPlayer: GameOptions) => {
        expect(optionSelectedByPlayer).toBe(GameOptions.Rock);
      });

    component.selectOption(GameOptions.Rock);
  });
});
