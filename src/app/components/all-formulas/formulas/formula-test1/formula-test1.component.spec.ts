import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaTest1Component } from './formula-test1.component';

describe('FormulaTest1Component', () => {
  let component: FormulaTest1Component;
  let fixture: ComponentFixture<FormulaTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaTest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
