import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaBaseComponent } from './formula-base/formula-base.component';
import { FormulaTest1Component } from './formulas/formula-test1/formula-test1.component';
import { FormulaTest2Component } from './formulas/formula-test2/formula-test2.component';
import { FormulaTest3Component } from './formulas/formula-test3/formula-test3.component';
import { FormulaTest4Component } from './formulas/formula-test4/formula-test4.component';
import { FormulaTest5Component } from './formulas/formula-test5/formula-test5.component';

let components = [
  FormulaBaseComponent,
  FormulaTest1Component,
  FormulaTest2Component,
  FormulaTest3Component,
  FormulaTest4Component,
  FormulaTest5Component
]

@NgModule({
  // declarations: components,
  imports: [
    CommonModule
  ],
  // exports:components
})
export class FormulasModule { }
