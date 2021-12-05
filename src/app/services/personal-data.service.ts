import { Injectable } from '@angular/core';
import { PersonalData } from '../models/personalData';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  personalData? : PersonalData
  constructor() { }

  
}
