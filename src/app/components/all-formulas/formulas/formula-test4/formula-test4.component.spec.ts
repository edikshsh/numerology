import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaTest4Component } from './formula-test4.component';

describe('FormulaTest4Component', () => {
  let component: FormulaTest4Component;
  let fixture: ComponentFixture<FormulaTest4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaTest4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaTest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
