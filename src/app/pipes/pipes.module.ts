import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UniquePipe} from './unique-pipe'
import {ExtractPipe} from './extract-pipe'
import {FilterPipe} from './filter-pipe'

let allPipes = [
  UniquePipe,
  ExtractPipe,
  FilterPipe
];

@NgModule({
  declarations: allPipes,
  imports: [
    CommonModule
  ],
  exports:allPipes,
  providers:allPipes
})
export class PipesModule { }
