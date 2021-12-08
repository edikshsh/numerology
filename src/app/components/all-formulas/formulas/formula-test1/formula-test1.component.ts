import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BaseFormula } from 'src/app/models/baseFormula';
import { TestFormula1 } from 'src/app/models/formulas/testFormula1';
import { PersonalData } from 'src/app/models/personalData';
import { CalculationsService } from 'src/app/services/calculations.service';
import { FormulasService } from 'src/app/services/formulas.service';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-formula-test1',
  templateUrl: './formula-test1.component.html',
  styleUrls: ['./formula-test1.component.css']
})
export class FormulaTest1Component implements OnInit, OnDestroy {

  formula?: TestFormula1
  personalData: PersonalData

  matana1:number = 0
  matana2:number = 0
  matanaNisteret:number = 0
  master:number = 0
  etgar:number = 0
  kshaiim:number = 0
  kvutsatNeshamot:number = 0

  constructor(private formulasService: FormulasService, private personalDataService: PersonalDataService, private calc: CalculationsService) {
    this.formula = formulasService.selectedFormula;
    this.personalData = personalDataService.personalData || new PersonalData('fname', 'lname');
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.calcData()
    this.personalDataService.register(()=>this.calcData())
  }

  calcData(){
    console.log('calculation data formula test1');
    
    this.personalData = this.personalDataService.personalData || new PersonalData('fname', 'lname');
    let day = this.personalData.birthdate.getDate()
    let month = this.personalData?.birthdate?.getMonth()
    let year = this.personalData?.birthdate?.getFullYear()

    // let matana1 = this.calc.toDigits(day).reduce((sum, num) => sum + num)
    let d1 = this.calc.digit(day, 1)
    let d2 = this.calc.digit(day, 2)
    this.matana1 = d1
    this.matana2 = d2
    this.matanaNisteret = this.calc.keepInRange(d2 - d1,1,9)
    if (d1 == d2) {
      this.master = day;
    }
    // this.etgar = this.calc.toDigits(day).reduce((sum, num) => sum + num)
    // this.kshaiim = this.calc.toDigits(month).reduce((sum, num) => sum + num)
    // this.kvutsatNeshamot = this.calc.toDigits(year).reduce((sum, num) => sum + num)
    this.etgar = this.calc.keepInRange(day,1,9)
    this.kshaiim = this.calc.keepInRange(month,1,9)
    this.kvutsatNeshamot = this.calc.keepInRange(year,1,9)

  }

}
