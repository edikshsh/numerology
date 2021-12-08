import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseFormula } from 'src/app/models/baseFormula';
import { FormulaOld } from 'src/app/models/formulas';
import { FilterPipe } from 'src/app/pipes/filter-pipe';
import { FormulasService } from 'src/app/services/formulas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // myForm!: FormGroup;

  // formula1: String = ''
  // formula2: String = ''
  // formula3: String = ''
  // formula4: String = ''


  // birthDate: Date;
  // get birthDateFormControl(): AbstractControl | null { return this.myForm.get('birthDate') };

  formulas: BaseFormula[] = []

  testChosenFormula?:BaseFormula


  constructor(private _fb: FormBuilder, private formulasService: FormulasService, private filterPipe:FilterPipe) {
    // this.birthDate = new Date();
    // this.formulas = formulasService.getFormulasSimplified()
    this.testChosenFormula = formulasService.testGetFirstFormula();
  }

  ngOnInit(): void {
    this.initForm();
    this.changeFormulaFilter({})

  }

  /**
   * initialise form
   */
  private initForm() {
    // this.myForm = this._fb.group({
    //   birthDate: this._fb.control(this.birthDate, [Validators.required])
    // });
  }


  // test() {

  //   let selectedDate: Date =  this.birthDateFormControl?.value


  //   console.log('Month: ' + (selectedDate.getMonth() + 1));
  //   console.log('Day: ' + selectedDate.getDate());
  //   console.log('Year: ' + selectedDate.getFullYear());


  //   this.formula1 = '1: ' + this.reduceNumberArrayToSingleDigit(selectedDate.getDate())
  //   this.formula2 = '2: ' + this.reduceNumberArrayToSingleDigit(selectedDate.getMonth() + 1)
  //   this.formula3 = '3: ' + this.reduceNumberArrayToSingleDigit(selectedDate.getFullYear())
  //   this.formula4 = '4: ' + this.reduceNumberArrayToSingleDigitSpecial(selectedDate.getDate(),selectedDate.getMonth() + 1,selectedDate.getFullYear())
  // }


  changeFormulaFilter(newFilter:{}){

    let oldFormatFormulas = this.formulasService.getFormulasSimplified()
    let oldFormatFormulasFiltered = this.filterPipe.transform(oldFormatFormulas, newFilter)
    this.formulas = this.formulasService.formulasSimplifiedToRegular(oldFormatFormulasFiltered)
  }

  selectFormula(formula:BaseFormula){
    this.testChosenFormula = formula
  }

}
