import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsVerticalChartComponent } from './statistics-vertical-chart.component';

describe('StatisticsVerticalChartComponent', () => {
  let component: StatisticsVerticalChartComponent;
  let fixture: ComponentFixture<StatisticsVerticalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsVerticalChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsVerticalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
