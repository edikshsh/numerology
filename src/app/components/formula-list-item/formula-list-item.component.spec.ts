import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaListItemComponent } from './formula-list-item.component';

describe('FormulaListItemComponent', () => {
  let component: FormulaListItemComponent;
  let fixture: ComponentFixture<FormulaListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
