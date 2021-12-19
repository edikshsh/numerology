import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalData } from 'src/app/models/personalData';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import * as moment from 'moment';
// import { MAT_DATE_FORMATS } from '@angular/material/core';

// export const MY_DATE_FORMATS = {
//   parse: {
//     dateInput: 'DD/MM/YYYY',
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY',
//     monthYearLabel: 'MMMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY'
//   },
// };

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css'],
  // providers: [
  //   { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  // ]
})
export class PersonalDataComponent implements OnInit {

  get firstName() {return this.myForm.get('firstName')?.value as string}
  get lastName() {return this.myForm.get('lastName')?.value as string}
  get birthDate() {return this.myForm.get('birthDate')?.value as moment.Moment}

  set firstName(firstName:string) {this.myForm.get('firstName')?.setValue(firstName)}
  set lastName(lastName:string) {this.myForm.get('lastName')?.setValue(lastName)}
  set birthDate(birthDate:moment.Moment) {this.myForm.get('birthDate')?.setValue(birthDate)}

  minDate = new Date(100, 0, 1);
  maxDate = new Date(9999, 0, 1); 

  myForm!: FormGroup;

  // firstName: string;
  // lastName: string;
  // birthDate: Date;
  // personalDate: Date;

  personalData?: PersonalData;


  constructor(private _fb: FormBuilder, private personalDataService: PersonalDataService) {
    // this.firstName = '';
    // this.lastName = '';
    // this.birthDate = new Date('05-05-1971')
    // this.personalDate = new Date('05-05-1971')

   }

  ngOnInit(): void {
    this.initForm()
    this.onDataChanged()
  }

    /**
   * initialise form
   */
     private initForm() {
      this.myForm = this._fb.group({
        firstName: this._fb.control('',[]),
        lastName: this._fb.control('',[]),
        birthDate: this._fb.control(moment('05-05-1971'), [Validators.required]),
        // birthDate: this._fb.control(moment('05-05-0110').subtract(120,'years'), [Validators.required]),
        // personalDate: this._fb.control(this.personalDate, [Validators.required]),
      });

      moment('05-05-0110').subtract(120,'years').toDate()

      this.myForm.valueChanges.subscribe(val => {
        this.onDataChanged();
      });
    }

    onDataChanged(){
      // console.log(val.firstName);
      // console.log(val.lastName);
      // console.log(val.birthDate);
      // console.log(val.personalDate);
      // console.log(`firstName = ${this.firstName}`);
      // console.log(`lastName = ${this.lastName}`);
      // console.log(`birthDate = ${this.birthDate}`);

      if (!this.myForm.errors && this.birthDate && this.birthDate.year() >= 1){
        // if (!this.myForm.errors && this.birthDate){
        this.personalData = new PersonalData(this.firstName, this.lastName, this.birthDate.toDate())    
        this.personalDataService.setPersonalData(this.personalData)
      }

    }



}
