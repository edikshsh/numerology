import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-formula-test5',
  templateUrl: './formula-test5.component.html',
  styleUrls: ['./formula-test5.component.css']
})
export class FormulaTest5Component implements OnInit {

  personalDate: Date
  shownDate:string

  constructor(private data: PersonalDataService) {

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
    this.shownDate = moment(this.personalDate).format('DD.MM.YYYY')
    
   }

  ngOnInit(): void {
  }

}
