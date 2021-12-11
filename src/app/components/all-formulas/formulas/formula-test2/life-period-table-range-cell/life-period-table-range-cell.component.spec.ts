import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifePeriodTableRangeCellComponent } from './life-period-table-range-cell.component';

describe('LifePeriodTableRangeCellComponent', () => {
  let component: LifePeriodTableRangeCellComponent;
  let fixture: ComponentFixture<LifePeriodTableRangeCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifePeriodTableRangeCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifePeriodTableRangeCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
