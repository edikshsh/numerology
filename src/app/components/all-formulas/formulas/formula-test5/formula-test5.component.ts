import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-formula-test5',
  templateUrl: './formula-test5.component.html',
  styleUrls: ['./formula-test5.component.css']
})
export class FormulaTest5Component implements OnInit {

  personalDate: Date = new Date()
  shownDate:string = ''

  personalYear:number = 0
  shanaNisteret:number = 0

  shanaNisteretArr: number[] = []
  shanaIshitArr = [1,2,3,4,5,6,7,8,9]

  constructor(private data: PersonalDataService) {

   }

  ngOnInit(): void {
    this.refreshData()
    this.data.register(()=>this.refreshData())
    // this.data.register(this.refreshData)
  }

  refreshData(){
    let currDate = new Date();
    let currDay = currDate.getDate()
    let currMonth = currDate.getMonth() + 1
    let currYear = currDate.getFullYear()

    let pYear = currDate.getFullYear() - 1
    console.log(this.data);
    
    if (this.data.personalData.birthDate.month >= 7) {
      pYear += 1;
    }
    if (currMonth > this.data.personalData.birthDate.month ||
      (currMonth === this.data.personalData.birthDate.month && currDay > this.data.personalData.birthDate.day)) {
      pYear += 1;
    }

    let pMonth = this.data.funcs.keepInRange(currMonth + pYear)
    let pDay = currDay // need to fix

    this.personalDate = new Date(pYear, pMonth, pDay);
    this.shownDate = moment(this.personalDate).format('DD.MM.YYYY')
    
    this.personalYear = this.data.funcs.keepInRange(this.data.funcs.keepInRange(pYear) + this.data.personalData.birthDate.day + this.data.personalData.birthDate.month)
    this.shanaNisteret = this.data.funcs.keepInRange(this.personalYear + this.data.nativGoral - 1)

    this.shanaNisteretArr = []
    this.shanaIshitArr.forEach((element) => {
      this.shanaNisteretArr.push( this.data.funcs.keepInRange(element + this.data.nativGoral - 1))
    });
  }
  

}
