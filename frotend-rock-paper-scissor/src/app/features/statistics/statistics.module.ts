import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { StatisticsTableComponent } from './components/statistics-table/statistics-table.component';
import { StatisticsVerticalChartComponent } from './components/statistics-vertical-chart/statistics-vertical-chart.component';



@NgModule({
  declarations: [
    StatisticsComponent,
    StatisticsTableComponent,
    StatisticsVerticalChartComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    MatCardModule,
    MatTableModule,
    NgxChartsModule
  ]
})
export class StatisticsModule { }
