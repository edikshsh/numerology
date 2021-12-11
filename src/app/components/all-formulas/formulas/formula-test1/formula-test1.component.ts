import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BaseFormula } from 'src/app/models/baseFormula';
import { TestFormula1 } from 'src/app/models/formulas/testFormula1';
import { PersonalData } from 'src/app/models/personalData';
import { CalculationsService } from 'src/app/services/calculations.service';
import { FormulasService } from 'src/app/services/formulas.service';
import { PersonalDataService } from 'src/app/services/personal-data.service';

import {matanot} from '../../../../data/matanot'

@Component({
  selector: 'app-formula-test1',
  templateUrl: './formula-test1.component.html',
  styleUrls: ['./formula-test1.component.css']
})
export class FormulaTest1Component implements OnInit, OnDestroy {

  formula?: TestFormula1
  // personalData: PersonalData

  matana1:number = 0
  matana2?:number = 0
  matanaNisteret?:number = 0
  master?:number = 0
  etgar:number = 0
  kshaiim:number = 0
  kvutsatNeshamot:number = 0
  nativGoral:number = 0
  matanot = matanot

  constructor(private formulasService: FormulasService, private data: PersonalDataService, private calc: CalculationsService) {
    this.formula = formulasService.selectedFormula;
    // this.personalData = personalDataService.personalData || new PersonalData('fname', 'lname');
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.calcData()
    this.data.register(()=>this.calcData())
  }

  calcData(){
    console.log('calculation data formula test1');

    //add nativ goral
    
    // this.personalData = this.personalDataService.personalData || new PersonalData('fname', 'lname');
    // let day = this.personalData.birthdate.getDate()
    // let month = this.personalData?.birthdate?.getMonth() + 1
    // let year = this.personalData?.birthdate?.getFullYear()
    // console.log(`${day}.${month}.${year}`);
    

    // let matana1 = this.calc.toDigits(day).reduce((sum, num) => sum + num)
    // let d1 = this.calc.digit(day, 1)
    // let d2 = this.calc.digit(day, 2)
    this.matana1 = this.data.matana1;
    this.matana2 = this.data.matana2;
    this.matanaNisteret = this.data.matanaNisteret;
    // if (this.matanaNisteret == this.matana1 || this.matanaNisteret == this.matana2){
    //   this.matanaNisteret = 0;
    // }
    // this.master = 0;
    // if (d1 == d2) {
    //   this.master = day;
    // }
    this.master = this.data.master;

    // this.etgar = this.calc.toDigits(day).reduce((sum, num) => sum + num)
    // this.kshaiim = this.calc.toDigits(month).reduce((sum, num) => sum + num)
    // this.kvutsatNeshamot = this.calc.toDigits(year).reduce((sum, num) => sum + num)
    // this.etgar = day >= 10 ? this.calc.keepInRange(day,1,9) : 0
    this.etgar = this.data.etgar;
    // this.kshaiim = this.calc.keepInRange(month,1,9)
    // this.kvutsatNeshamot = this.calc.keepInRange(year,1,9)
    this.kshaiim = this.data.kshaiim;
    this.kvutsatNeshamot = this.data.kvutsatNeshamot;
    // this.nativGoral = this.calc.nativGoral(this.personalData.birthdate)
    this.nativGoral = this.data.nativGoral;

  }

}
