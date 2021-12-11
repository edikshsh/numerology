import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalData } from 'src/app/models/personalData';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  myForm!: FormGroup;

  firstName: string;
  lastName: string;
  birthDate: Date;
  personalDate: Date;

  personalData?: PersonalData;


  constructor(private _fb: FormBuilder, private personalDataService: PersonalDataService) {
    this.firstName = '';
    this.lastName = '';
    this.birthDate = new Date()
    this.personalDate = new Date()

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
        firstName: this._fb.control(this.firstName,[]),
        lastName: this._fb.control(this.lastName,[]),
        birthDate: this._fb.control(this.birthDate, [Validators.required]),
        personalDate: this._fb.control(this.personalDate, [Validators.required]),
      });

      this.myForm.valueChanges.subscribe(val => {
        this.onDataChanged();
      });
    }

    onDataChanged(){
      // console.log(val.firstName);
      // console.log(val.lastName);
      // console.log(val.birthDate);
      // console.log(val.personalDate);
      this.personalData = new PersonalData(this.firstName, this.lastName, this.birthDate, this.personalDate)
      this.personalDataService.setPersonalData(this.personalData)
    }



}
