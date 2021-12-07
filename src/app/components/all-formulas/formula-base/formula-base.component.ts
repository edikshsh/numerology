import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormula } from 'src/app/models/baseFormula';
import { FormulasService } from 'src/app/services/formulas.service';

@Component({
  selector: 'app-formula-base',
  templateUrl: './formula-base.component.html',
  styleUrls: ['./formula-base.component.css']
})
export class FormulaBaseComponent implements OnInit {

  // aaa?: BaseFormula
  testHtmlLabel = 'mat-card-content'

  @Input() set formula(value: BaseFormula) {
    
       this._formula = value;
       this.router.navigate(['formulas',this._formula?.componentName])    
    }
  @Input() _formula?: BaseFormula;

  constructor(private formulasService: FormulasService, private router :Router) { }

  ngOnInit(): void {
  }

}
