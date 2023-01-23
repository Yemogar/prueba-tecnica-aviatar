import { Component, Input } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { GameResult } from 'src/app/features/game/models/game-result';

@Component({
  selector: 'app-statistics-table',
  templateUrl: './statistics-table.component.html',
  styleUrls: ['./statistics-table.component.sass']
})
export class StatisticsTableComponent {
  @Input()
  gameResults!: GameResult[] | null;

  displayedColumns: string[] = ['position', 'winner', 'optionSelectedByPlayer', 'optionSelectedByComputer'];
  dataSource: MatTableDataSource<GameResult, MatTableDataSourcePaginator> | undefined;

  constructor() {
    this.loadDataSource();
  }

  loadDataSource(): void {
    if (this.gameResults) {
      this.dataSource = new MatTableDataSource<GameResult>(this.gameResults);
    }
  }
}
