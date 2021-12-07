import { PersonalData } from "../models/personalData";
import { SubCategory } from "../models/subCategory";

export interface FormulaInterface{
    name: string ;
    parent: SubCategory;
    calculateFree({...params}):any;
    calculate(personalData: PersonalData):any;

}