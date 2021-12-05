import { Injectable } from '@angular/core';
import { PersonalData } from '../models/personalData';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  private _personalData? : PersonalData
  constructor() { }

  setPersonalData(newPersonalData:PersonalData){
    this._personalData = newPersonalData;
  }

  // set personalData(newPersonalData:PersonalData){this._personalData = newPersonalData;}
  get personalData(){return this._personalData}

}
