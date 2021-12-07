import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormulaBaseComponent } from './components/all-formulas/formula-base/formula-base.component';
import { FormulaTest1Component } from './components/all-formulas/formulas/formula-test1/formula-test1.component';
import { FormulaTest2Component } from './components/all-formulas/formulas/formula-test2/formula-test2.component';
import { FormulaTest3Component } from './components/all-formulas/formulas/formula-test3/formula-test3.component';
import { FormulaTest4Component } from './components/all-formulas/formulas/formula-test4/formula-test4.component';
import { FormulaTest5Component } from './components/all-formulas/formulas/formula-test5/formula-test5.component';

// const components = [
//   FormulaBaseComponent,
//   FormulaTest1Component,
//   FormulaTest2Component,
//   FormulaTest3Component,
//   FormulaTest4Component,
//   FormulaTest5Component,
// ]

const routes: Routes = [{
  path: 'formulas',
  children: [
    { path: 'FormulaTest1', component: FormulaTest1Component },
    { path: 'FormulaTest2', component: FormulaTest2Component },
    { path: 'FormulaTest3', component: FormulaTest3Component },
    { path: 'FormulaTest4', component: FormulaTest4Component },
    { path: 'FormulaTest5', component: FormulaTest5Component }
  ]
}

];
@NgModule({
  // declarations:components,
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
