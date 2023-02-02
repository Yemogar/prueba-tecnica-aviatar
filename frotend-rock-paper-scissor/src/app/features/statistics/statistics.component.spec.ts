import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatisticsTableComponent } from './components/statistics-table/statistics-table.component';
import { StatisticsVerticalChartComponent } from './components/statistics-vertical-chart/statistics-vertical-chart.component';

import { StatisticsComponent } from './statistics.component';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatCardModule,
        MatPaginatorModule,
        MatTableModule,
        BrowserAnimationsModule
      ],
      declarations: [ StatisticsComponent, StatisticsTableComponent, StatisticsVerticalChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
