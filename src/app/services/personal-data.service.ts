import { Injectable } from '@angular/core';
import { HelperFunctions } from '../models/helper-functions';
import { LifePeriod } from '../models/life-period';
import { PersonalData } from '../models/personalData';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  private _personalData : PersonalData = new PersonalData('fname','lname');
  private _cb:Function = ()=>{}
  public funcs : HelperFunctions = new HelperFunctions()

  private _matana1:number = 0
  private _matana2?:number = 0
  private _matanaNisteret?:number = 0
  private _master?:number = 0
  private _etgar:number = 0
  private _kshaiim:number = 0
  private _kvutsatNeshamot:number = 0
  private _nativGoral:number = 0
  private _shnotGoral: number[] = []
  private _gilGoraly: number[] = []
  private _gilBashlut: number = 0;
  // matanot = matanot
  private _lifePeriods: LifePeriod[] = []

  get matana1(){return this._matana1}
  get matana2(){return this._matana2}
  get matanaNisteret(){return this._matanaNisteret}
  get master(){return this._master}
  get etgar(){return this._etgar}
  get kshaiim(){return this._kshaiim}
  get kvutsatNeshamot(){return this._kvutsatNeshamot}
  get nativGoral(){return this._nativGoral}
  get shnotGoral(){return this._shnotGoral}
  get gilGoraly(){return this._gilGoraly}
  get gilBashlut(){return this._gilBashlut}
  get lifePeriods(){return this._lifePeriods}

  private set matana1(matana1){this._matana1 = matana1}
  private set matana2(matana2){this._matana2 = matana2}
  private set matanaNisteret(matanaNisteret){this._matanaNisteret = matanaNisteret}
  private set master(master){this._master = master}
  private set etgar(etgar){this._etgar = etgar}
  private set kshaiim(kshaiim){this._kshaiim = kshaiim}
  private set kvutsatNeshamot(kvutsatNeshamot){this._kvutsatNeshamot= kvutsatNeshamot}
  private set nativGoral(nativGoral){this._nativGoral = nativGoral}
  private set shnotGoral(shnotGoral){this._shnotGoral = shnotGoral}
  private set gilGoraly(gilGoraly){this._gilGoraly = gilGoraly}
  private set gilBashlut(gilBashlut){this._gilBashlut = gilBashlut}
  private set lifePeriods(lifePeriods){this._lifePeriods = lifePeriods}



  constructor() { }

  setPersonalData(newPersonalData:PersonalData){
    this._personalData = newPersonalData;
    this.refreshCalculations()
    this.buildLifePeriods()
    this._cb();
  }

  // set personalData(newPersonalData:PersonalData){this._personalData = newPersonalData;}
  get personalData(){return this._personalData}

  register(cb:Function){this._cb=cb}

  refreshCalculations(){
    let bdate = this.personalData.birthDate
    this.matana1 = this.personalData.birthDate.dayDigits[0]
    this.matana2 = this.personalData.birthDate.dayDigits[1]
    if (this.matana1 ==  this.matana2){
      this.matana2 = undefined;
    }
    this.matanaNisteret = this.funcs.keepInRange(Math.abs(bdate.dayDigits[0] - bdate.dayDigits[1]),1,9) //only when day > 10 (11/20/21/22/30/31)
    if (this.matanaNisteret == 0){
      this.matanaNisteret = undefined;
    }
    this._master = undefined;
    if (bdate.dayDigits[0] == bdate.dayDigits[1]) {
      this.master = bdate.day;
    }
    this.etgar = bdate.day >= 10 ? this.funcs.keepInRange(bdate.day) : 0
    this.kshaiim = this.funcs.keepInRange(bdate.month,1,9)
    this.kvutsatNeshamot = this.funcs.keepInRange(bdate.year)

    this.gilGoraly.push(bdate.day)
    this.gilGoraly.push(bdate.day + bdate.month)
    this.gilGoraly.push(bdate.day + bdate.month + this.funcs.keepInRange(bdate.year))
    this.gilGoraly.push(this.funcs.sumDigits(bdate.day,bdate.month, bdate.year));

    this.nativGoral = this.funcs.keepInRange(this.gilGoraly[3])


    this.gilBashlut = 27 - this.nativGoral
    this.shnotGoral = [45 - this.nativGoral, 50 - this.nativGoral];

    console.log('personal data recalculated');
    
  }

  buildLifePeriods(){

    let day = this.personalData.birthDate.day
    let month = this.personalData?.birthDate?.month
    let year = this.personalData?.birthDate?.year


    this.lifePeriods = [];
    this.lifePeriods.push(new LifePeriod('Meatsev',
      0,
      36 - this.nativGoral,
      this.funcs.keepInRange(day + month),
      Math.abs(this.funcs.keepInRange(day) - this.funcs.keepInRange(month)),
      this.funcs.keepInRange(month)
    ))

    this.lifePeriods.push(new LifePeriod('Yotser1',
      this.lifePeriods[0].end,
      this.lifePeriods[0].end + 9,
      this.funcs.keepInRange(day + year),
      Math.abs(this.funcs.keepInRange(day) - this.funcs.keepInRange(year)),
      this.funcs.keepInRange(day)
    ))

    this.lifePeriods.push(new LifePeriod('Yotser2',
      this.lifePeriods[1].end,
      this.lifePeriods[1].end + 9,
      this.funcs.keepInRange(this.lifePeriods[0].pisga + this.lifePeriods[1].pisga),
      Math.abs(this.lifePeriods[0].etgar -this.lifePeriods[1].etgar),
      this.funcs.keepInRange(day, 1, 9)
    ))

    this.lifePeriods.push(new LifePeriod('Katsir',
      this.lifePeriods[2].end,
      120,
      this.funcs.keepInRange(month + year, 1, 9),
      Math.abs(this.funcs.keepInRange(month,1,9) - this.funcs.keepInRange(year,1,9)),
      this.funcs.keepInRange(year, 1, 9)
    ))
  }


  // gilGorali1(date:Date){
  //   return date.getDate();
  // }
  // gilGorali2(date:Date){
  //   return this.gilGorali1(date) + date.getMonth() + 1;
  // }
  // gilGorali3(date:Date){
  //   return this.gilGorali2(date) + this.funcs.keepInRange(date.getFullYear(),1,9);
  // }
  // gilGorali4(date:Date){
  //   return this.funcs.sumDigits(date.getDate()) + this.funcs.sumDigits(date.getMonth() + 1) + this.funcs.sumDigits(date.getFullYear())
  // }

  // nativGoral(date:Date){
  //   return this.funcs.keepInRange(this.gilGorali4(date),1,9)
  // }

}
