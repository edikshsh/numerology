import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-formula-test4',
  templateUrl: './formula-test4.component.html',
  styleUrls: ['./formula-test4.component.css']
})
export class FormulaTest4Component implements OnInit {

  myForm!:FormGroup
  otherBirthDate!: Date

  personalDate:Date
  genderNumbers = ['','M','F','F','M','M','F','F','M','F']
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
      (currMonth === data.personalData.birthDate.month && currDay > data.personalData.birthDate.day)){
        pYear += 1;
    }

    let pMonth = data.funcs.keepInRange(currMonth + pYear)
    let pDay = currDay // need to fix

    this.personalDate = new Date(pYear,pMonth,pDay);

   }

   private initForm() {
    this.myForm = this._fb.group({
      otherBirthDate: this._fb.control(this.otherBirthDate, [Validators.required]),
    });

    this.myForm.valueChanges.subscribe(val => {
      this.onDataChanged();
    });
  }

  onDataChanged(){

  }

  ngOnInit(): void {
    this.initForm();
  }

}
