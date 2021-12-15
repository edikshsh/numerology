import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaTest6Component } from './formula-test6.component';

describe('FormulaTest6Component', () => {
  let component: FormulaTest6Component;
  let fixture: ComponentFixture<FormulaTest6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaTest6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaTest6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
