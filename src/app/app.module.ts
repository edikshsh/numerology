import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MaterialModule} from './mat.module';
import { MainComponent } from './components/main/main.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulaFilterComponent } from './components/formula-filter/formula-filter.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgPipesModule} from 'angular-pipes'
import {ScrollingModule} from '@angular/cdk/scrolling'
import {NgChartsModule} from 'ng2-charts'

import {PipesModule} from './pipes/pipes.module';
import { FormulaListItemComponent } from './components/formula-list-item/formula-list-item.component';
import { FormulaListComponent } from './components/formula-list/formula-list.component';
import { FormulaBaseComponent } from './components/all-formulas/formula-base/formula-base.component';
import { FormulaTest1Component } from './components/all-formulas/formulas/formula-test1/formula-test1.component';
import { FormulaTest2Component } from './components/all-formulas/formulas/formula-test2/formula-test2.component';
import { FormulaTest3Component } from './components/all-formulas/formulas/formula-test3/formula-test3.component';
import { FormulaTest4Component } from './components/all-formulas/formulas/formula-test4/formula-test4.component';
import { FormulaTest5Component } from './components/all-formulas/formulas/formula-test5/formula-test5.component';
import { LifePeriodTableRangeCellComponent } from './components/all-formulas/formulas/formula-test2/life-period-table-range-cell/life-period-table-range-cell.component';
import { PythagorasMatrixCellComponent } from './components/all-formulas/formulas/formula-test3/pythagoras-matrix-cell/pythagoras-matrix-cell.component';
import { FormulaTest6Component } from './components/all-formulas/formulas/formula-test6/formula-test6.component';
// import {FormulasModule} from './components/all-formulas/formulas.module'



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormulaFilterComponent,
    PersonalDataComponent,
    FormulaListItemComponent,
    FormulaListComponent,
    FormulaBaseComponent,
    FormulaTest1Component,
    FormulaTest2Component,
    FormulaTest3Component,
    FormulaTest4Component,
    FormulaTest5Component,
    LifePeriodTableRangeCellComponent,
    PythagorasMatrixCellComponent,
    FormulaTest6Component
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgbModule,
    NgPipesModule,
    PipesModule,
    ScrollingModule,
    NgChartsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
