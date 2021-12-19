import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { PersonalDataService } from 'src/app/services/personal-data.service';
enum Gender {
    MALE='M',
    FEMALE='F'
}

export class GenderNumbers{
  constructor(public numbers:number[]){}
  genderNumbers = ['', 'M', 'F', 'F', 'M', 'M', 'F', 'F', 'M', 'F']

  getGenderNumbers(gender:Gender){
      // let arrFemaleNumbers:number[]
      return this.numbers.map((value,i)=>[value,i]).filter((value,j)=>value[0] != 0 && this.genderNumbers[value[1]] == gender).map(value=>value[1])
  }

}

@Component({
  selector: 'app-formula-test4',
  templateUrl: './formula-test4.component.html',
  styleUrls: ['./formula-test4.component.css']
})
export class FormulaTest4Component implements OnInit {

  myForm!: FormGroup
  // otherBirthDate: moment.Moment = moment('07-03-1973');

  get otherBirthDate(){return this.myForm.get('otherBirthDate')?.value as moment.Moment}
  set otherBirthDate(otherBirthDate:moment.Moment) {this.myForm.get('otherBirthDate')?.setValue(otherBirthDate)}

  myNumbers: Map<number, number>[] = []
  othersNumbers: Map<number, number>[] = []

  minDate = new Date(100, 0, 1);
  maxDate = new Date(9999, 0, 1); 
  
  displayedColumns = ['femaleNumbers','maleNumbers']
  displayedDataMy:GenderNumbers[] = [new GenderNumbers(Array<number>(10).fill(0)),new GenderNumbers(Array<number>(10).fill(0))];
  displayedDataOther:GenderNumbers[] = [new GenderNumbers(Array<number>(10).fill(0)),new GenderNumbers(Array<number>(10).fill(0))];

  constructor(private data: PersonalDataService, private _fb: FormBuilder) {



    // this.displayedData[0] = [new Temp()]
  }

  private initForm() {
    this.myForm = this._fb.group({
      otherBirthDate: this._fb.control(moment('07-03-1973'), [Validators.required]),
    });

    this.myForm.valueChanges.subscribe(val => {
      this.onDataChanged();
    });
  }

  onDataChanged() {
    // this.otherBirthDate = moment('07-03-1973')

    this.displayedDataMy = [new GenderNumbers(Array<number>(10).fill(0)),new GenderNumbers(Array<number>(10).fill(0))];
    this.displayedDataOther= [new GenderNumbers(Array<number>(10).fill(0)),new GenderNumbers(Array<number>(10).fill(0))];

    this.myNumbers[0] = new Map()
    let myNumbersTemp = this.data.personalData.birthDate.dayDigits
      .concat(this.data.funcs.keepInRange(this.data.personalData.birthDate.day),
      this.data.personalData.birthDate.monthDigits,
      this.data.funcs.keepInRange(this.data.personalData.birthDate.month),
        [this.data.nativGoral])
    myNumbersTemp.forEach(number => {
      this.myNumbers[0].set(number, (this.myNumbers[0].get(number) || 0) + 1)
      this.displayedDataMy[0].numbers[number] +=1;
    });

    this.othersNumbers[0] = new Map()
    let othersNumbersTemp = this.data.funcs.toDigits(this.otherBirthDate.date())
      .concat(this.data.funcs.keepInRange(this.otherBirthDate.date()),
      this.data.funcs.toDigits(this.otherBirthDate.month()+1),
      this.data.funcs.keepInRange(this.otherBirthDate.month()+1),
        [this.data.funcs.keepInRange(this.otherBirthDate.date() + this.otherBirthDate.month() + 1 + this.otherBirthDate.year())])
    othersNumbersTemp.forEach(number => {
      this.othersNumbers[0].set(number, (this.othersNumbers[0].get(number) || 0) + 1)
      this.displayedDataOther[0].numbers[number] +=1;
    });

    let othersLifePeriods = this.data.buildLifePeriods(this.otherBirthDate.toDate())
    this.myNumbers[1] = new Map()
    this.data.lifePeriods.forEach(lifePeriod => {
      this.myNumbers[1].set(lifePeriod.pisga, (this.myNumbers[1].get(lifePeriod.pisga) || 0) + 1)
      this.displayedDataMy[1].numbers[lifePeriod.pisga] +=1;
    });
    this.othersNumbers[1] = new Map()
    othersLifePeriods.forEach(lifePeriod => {
      this.othersNumbers[1].set(lifePeriod.pisga, (this.othersNumbers[1].get(lifePeriod.pisga) || 0) + 1)
      this.displayedDataOther[1].numbers[lifePeriod.pisga] +=1;
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.data.register(()=>this.onDataChanged())
    this.onDataChanged();
  }

}
