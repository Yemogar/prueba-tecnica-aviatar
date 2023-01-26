import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { GameResult } from 'src/app/features/game/models/game-result';

@Component({
  selector: 'app-statistics-table',
  templateUrl: './statistics-table.component.html',
  styleUrls: ['./statistics-table.component.sass']
})
export class StatisticsTableComponent implements OnChanges {
  @Input()
  gameResults!: GameResult[] | null;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns: string[] = ['position', 'winner', 'optionSelectedByPlayer', 'optionSelectedByComputer'];
  dataSource: MatTableDataSource<GameResult> = new MatTableDataSource<GameResult>();

  ngOnChanges(changes: SimpleChanges): void {
    this.loadDataSourceWithPaginator();
  }

  loadDataSourceWithPaginator(): void {
    if (this.gameResults) {
      this.dataSource.data = this.gameResults;
      this.dataSource.paginator = this.paginator;
      this.paginator.length = this.gameResults.length;
    }
  }
}
