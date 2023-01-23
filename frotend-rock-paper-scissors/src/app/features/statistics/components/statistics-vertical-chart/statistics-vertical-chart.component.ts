import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Statistic } from '../../models/statistic';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-statistics-vertical-chart',
  templateUrl: './statistics-vertical-chart.component.html',
  styleUrls: ['./statistics-vertical-chart.component.sass']
})
export class StatisticsVerticalChartComponent implements OnInit, OnDestroy {
  private statisticSubscription: Subscription | undefined;

  view: [number, number] = [500, 400];

  dataForChartChoices: any[] = [];
  dataForChartResults: any[] = [];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  yAxisLabelChartChoices: string = 'Number Of Times';
  legendTitleChartChoices: string = 'Choice';
  legendTitleChartResults: string = 'Result';

  constructor(private statisticsService: StatisticsService) {
  }

  ngOnDestroy(): void {
    this.statisticSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.statisticSubscription = this.statisticsService
      .getStatisticsByUsername()
      .subscribe(
        (data: Statistic) => {
          this.dataForChartChoices = this.statisticsService.loadDataForChartChoices(data);
          this.dataForChartResults = this.statisticsService.loadDataForChartResults(data);
        }
      );
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
