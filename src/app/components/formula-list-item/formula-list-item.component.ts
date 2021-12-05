import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseFormula } from 'src/app/models/baseFormula';

@Component({
  selector: 'app-formula-list-item',
  templateUrl: './formula-list-item.component.html',
  styleUrls: ['./formula-list-item.component.css']
})
export class FormulaListItemComponent implements OnInit {

  @Input() formula?:BaseFormula
  @Output() selectedFormulaEvent = new EventEmitter<BaseFormula>();  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('clickety click');
    this.selectedFormulaEvent.emit(this.formula)
  }

}
