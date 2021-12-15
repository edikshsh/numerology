import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  otherBirthDate: Date


  myNumbers: Map<number, number>[] = []
  othersNumbers: Map<number, number>[] = []
  
  displayedColumns = ['femaleNumbers','maleNumbers']
  displayedDataMy:GenderNumbers[] = [new GenderNumbers(Array<number>(10).fill(0)),new GenderNumbers(Array<number>(10).fill(0))];
  displayedDataOther:GenderNumbers[] = [new GenderNumbers(Array<number>(10).fill(0)),new GenderNumbers(Array<number>(10).fill(0))];

  constructor(private data: PersonalDataService, private _fb: FormBuilder) {

    this.otherBirthDate = new Date('03-07-1973')

    this.myNumbers[0] = new Map()
    let myNumbersTemp = data.personalData.birthDate.dayDigits
      .concat(data.funcs.keepInRange(data.personalData.birthDate.day),
        data.personalData.birthDate.monthDigits,
        data.funcs.keepInRange(data.personalData.birthDate.month),
        [this.data.nativGoral])
    myNumbersTemp.forEach(number => {
      this.myNumbers[0].set(number, (this.myNumbers[0].get(number) || 0) + 1)
      this.displayedDataMy[0].numbers[number] +=1;
    });

    this.othersNumbers[0] = new Map()
    let othersNumbersTemp = data.funcs.toDigits(this.otherBirthDate.getDate())
      .concat(data.funcs.keepInRange(this.otherBirthDate.getDate()),
        data.funcs.toDigits(this.otherBirthDate.getMonth()+1),
        data.funcs.keepInRange(this.otherBirthDate.getMonth()+1),
        [data.funcs.keepInRange(this.otherBirthDate.getDate() + this.otherBirthDate.getMonth() + 1 + this.otherBirthDate.getFullYear())])
    othersNumbersTemp.forEach(number => {
      this.othersNumbers[0].set(number, (this.othersNumbers[0].get(number) || 0) + 1)
      this.displayedDataOther[0].numbers[number] +=1;
    });

    let othersLifePeriods = data.buildLifePeriods(this.otherBirthDate)
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
