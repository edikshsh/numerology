import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  formulas: FormulaOld[] = []


  constructor(private _fb: FormBuilder, private formulasService: FormulasService, private filterPipe:FilterPipe) {
    // this.birthDate = new Date();
    this.formulas = formulasService.getFormulasSimplified()
  }

  ngOnInit(): void {
    this.initForm();
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

  reduceNumberArrayToSingleDigit(...args: number[]): number {
    let result = 0
    args.forEach(num => {
      result += this.reduceNumberToSingleDigit(num)
    });

    return this.reduceNumberToSingleDigit(result);
  }

  reduceNumberArrayToSingleDigitSpecial(...args: number[]): number {
    let result = 0
    args.forEach(num => {
      result += this.reduceNumberToSingleDigit(num)
    });

    return this.reduceNumberToSingleDigit(result,[11,22]);
  }

  reduceNumberToSingleDigit(num: number, ignore:number[] = []) {
    while (num >= 10 && !ignore.find((ignoredNumber) => num == ignoredNumber)) {
      let tempResult = 0;
      while (num != 0) {
        tempResult += num % 10
        num = Math.floor(num / 10)
      }
      num = tempResult
    }
    console.log('reduceNumberToSingleDigit returning ' + num)
    return num;
  }

  changeFormulaFilter(newFilter:{}){
    this.formulas = this.filterPipe.transform(this.formulasService.getFormulasSimplified(), newFilter) 
  }

}
