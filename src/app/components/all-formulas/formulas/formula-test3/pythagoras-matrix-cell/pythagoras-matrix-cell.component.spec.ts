import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythagorasMatrixCellComponent } from './pythagoras-matrix-cell.component';

describe('PythagorasMatrixCellComponent', () => {
  let component: PythagorasMatrixCellComponent;
  let fixture: ComponentFixture<PythagorasMatrixCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythagorasMatrixCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythagorasMatrixCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
