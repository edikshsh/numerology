import { FormulaInterface } from "../interfaces/formulaInterface";
import { PersonalData } from "./personalData";
import { SubCategory } from "./subCategory";

export class BaseFormula implements FormulaInterface{

    componentName:string = 'formula-base'

    constructor(public name: string, public description: string, public parent: SubCategory) {}
    
    calculateFree({...params} = {}) {
        return 'calculateFree in BaseFormula';
    }
    calculate(personalData: PersonalData) {
        return 'calculate in BaseFormula';
    }
}