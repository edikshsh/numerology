import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaFilterComponent } from './formula-filter.component';

describe('FormulaFilterComponent', () => {
  let component: FormulaFilterComponent;
  let fixture: ComponentFixture<FormulaFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
