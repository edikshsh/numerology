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

import {PipesModule} from './pipes/pipes.module';
import { FormulaComponent } from './components/formula/formula.component'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormulaFilterComponent,
    PersonalDataComponent,
    FormulaComponent
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
    ScrollingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
