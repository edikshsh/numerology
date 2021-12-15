import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalDataService } from 'src/app/services/personal-data.service';

export class Temp{
  constructor(public my:Map<number,number>, public other:Map<number,number>){}
}

@Component({
  selector: 'app-formula-test4',
  templateUrl: './formula-test4.component.html',
  styleUrls: ['./formula-test4.component.css']
})
export class FormulaTest4Component implements OnInit {

  myForm!: FormGroup
  otherBirthDate!: Date

  personalDate: Date
  genderNumbers = ['', 'M', 'F', 'F', 'M', 'M', 'F', 'F', 'M', 'F']

  myNumbers: Map<number, number>[] = []
  othersNumbers: Map<number, number>[] = []
  
  displayedColumns = ['Female','Male']
  displayedData:Temp[][] = []

  constructor(private data: PersonalDataService, private _fb: FormBuilder) {
    let currDate = new Date();
    let currDay = currDate.getDate()
    let currMonth = currDate.getMonth() + 1
    let currYear = currDate.getFullYear()

    let pYear = currDate.getFullYear() - 1
    if (data.personalData.birthDate.month >= 7) {
      pYear += 1;
    }
    if (currMonth > data.personalData.birthDate.month ||
      (currMonth === data.personalData.birthDate.month && currDay > data.personalData.birthDate.day)) {
      pYear += 1;
    }

    let pMonth = data.funcs.keepInRange(currMonth + pYear)
    let pDay = currDay // need to fix

    this.personalDate = new Date(pYear, pMonth, pDay);

    this.myNumbers[0] = new Map()
    let myNumbersTemp = data.personalData.birthDate.dayDigits
      .concat(data.personalData.birthDate.monthDigits,
        [data.funcs.keepInRange(data.personalData.birthDate.day + data.personalData.birthDate.month + data.personalData.birthDate.year)])
    myNumbersTemp.forEach(number => {
      this.myNumbers[0].set(number, (this.myNumbers[0].get(number) || 0) + 1)
    });

    this.othersNumbers[0] = new Map()
    let othersNumbersTemp = data.funcs.toDigits(this.otherBirthDate.getDate())
      .concat(data.funcs.toDigits(this.otherBirthDate.getMonth()),
        [data.funcs.keepInRange(this.otherBirthDate.getDate() + this.otherBirthDate.getMonth() + this.otherBirthDate.getFullYear())])
    othersNumbersTemp.forEach(number => {
      this.othersNumbers[0].set(number, (this.othersNumbers[0].get(number) || 0) + 1)
    });

    let othersLifePeriods = data.buildLifePeriods(this.otherBirthDate)
    this.myNumbers[1] = new Map()
    this.data.lifePeriods.forEach(lifePeriod => {
      this.myNumbers[0].set(lifePeriod.pisga, (this.myNumbers[0].get(lifePeriod.pisga) || 0) + 1)
    });
    this.othersNumbers[1] = new Map()
    othersLifePeriods.forEach(lifePeriod => {
      this.othersNumbers[0].set(lifePeriod.pisga, (this.othersNumbers[0].get(lifePeriod.pisga) || 0) + 1)
    });

    // this.displayedData[0] = [new Temp()]
  }

  private initForm() {
    this.myForm = this._fb.group({
      otherBirthDate: this._fb.control(this.otherBirthDate, [Validators.required]),
    });

    this.myForm.valueChanges.subscribe(val => {
      this.onDataChanged();
    });
  }

  onDataChanged() {

  }

  ngOnInit(): void {
    this.initForm();
  }

}
