import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StatisticsTableComponent } from './statistics-table.component';

describe('StatisticsTableComponent', () => {
  let component: StatisticsTableComponent;
  let fixture: ComponentFixture<StatisticsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatPaginatorModule,
        MatTableModule,
        BrowserAnimationsModule
      ],
      declarations: [ StatisticsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
