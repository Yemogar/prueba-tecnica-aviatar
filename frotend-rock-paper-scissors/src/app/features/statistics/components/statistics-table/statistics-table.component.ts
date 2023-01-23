import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GameResult } from 'src/app/features/game/models/game-result';

@Component({
  selector: 'app-statistics-table',
  templateUrl: './statistics-table.component.html',
  styleUrls: ['./statistics-table.component.sass']
})
export class StatisticsTableComponent {
  @Input()
  gameResults: GameResult[] = [];

  displayedColumns: string[] = ['position', 'winner', 'optionSelectedByPlayer', 'optionSelectedByComputer'];
  dataSource = new MatTableDataSource<GameResult>(this.gameResults);
}
