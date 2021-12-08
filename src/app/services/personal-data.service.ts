import { Injectable } from '@angular/core';
import { PersonalData } from '../models/personalData';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  private _personalData? : PersonalData
  private _cb:Function = ()=>{}
  constructor() { }

  setPersonalData(newPersonalData:PersonalData){
    this._personalData = newPersonalData;
    this._cb();
  }

  // set personalData(newPersonalData:PersonalData){this._personalData = newPersonalData;}
  get personalData(){return this._personalData}

  register(cb:Function){this._cb=cb}

}
