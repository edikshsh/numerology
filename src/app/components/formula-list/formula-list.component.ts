import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseFormula } from 'src/app/models/baseFormula';

@Component({
  selector: 'app-formula-list',
  templateUrl: './formula-list.component.html',
  styleUrls: ['./formula-list.component.css']
})
export class FormulaListComponent implements OnInit {

  @Input() formulas?: BaseFormula[]
  @Output() selectedFormulaEvent = new EventEmitter<BaseFormula>(); 

  selectedFormulaName:string = ''

  constructor() { }

  ngOnInit(): void {
    console.log(`received ${this.formulas?.length} formulas`);
    
  }

  selectedFormula(formula:BaseFormula){
    this.selectedFormulaEvent.emit(formula)
    this.selectedFormulaName = formula.name;
  }
}
