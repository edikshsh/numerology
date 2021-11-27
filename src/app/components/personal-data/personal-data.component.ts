import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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


  constructor(private _fb: FormBuilder) {
    this.firstName = '';
    this.lastName = '';
    this.birthDate = new Date()
    this.personalDate = new Date()

   }

  ngOnInit(): void {
    this.initForm()
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
    }

}
