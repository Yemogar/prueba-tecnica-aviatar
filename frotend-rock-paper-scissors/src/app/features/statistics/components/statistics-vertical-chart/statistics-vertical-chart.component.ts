import { Component, Input } from '@angular/core';

import { StatisticsCharts } from '../../models/statistics-charts';

@Component({
  selector: 'app-statistics-vertical-chart',
  templateUrl: './statistics-vertical-chart.component.html',
  styleUrls: ['./statistics-vertical-chart.component.sass']
})
export class StatisticsVerticalChartComponent {
  @Input()
  statisticsForCharts!: StatisticsCharts | null;

  // Options for charts
  view: [number, number] = [500, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  yAxisLabelChartChoices: string = 'Number Of Times';
  legendTitleChartChoices: string = 'Choice';
  legendTitleChartResults: string = 'Result';

}
