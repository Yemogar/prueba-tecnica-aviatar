import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
