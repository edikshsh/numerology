import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaTest5Component } from './formula-test5.component';

describe('FormulaTest5Component', () => {
  let component: FormulaTest5Component;
  let fixture: ComponentFixture<FormulaTest5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaTest5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaTest5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
