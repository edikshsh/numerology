import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaTest3Component } from './formula-test3.component';

describe('FormulaTest3Component', () => {
  let component: FormulaTest3Component;
  let fixture: ComponentFixture<FormulaTest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaTest3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
