import { Component, Input, OnInit } from '@angular/core';
import { BaseFormula } from 'src/app/models/baseFormula';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {

  @Input() formula?: BaseFormula;
  constructor() { }

  ngOnInit(): void {
  }

}
