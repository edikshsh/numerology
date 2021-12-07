import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaTest2Component } from './formula-test2.component';

describe('FormulaTest2Component', () => {
  let component: FormulaTest2Component;
  let fixture: ComponentFixture<FormulaTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaTest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
