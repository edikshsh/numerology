import { FormulaInterface } from "../interfaces/formulaInterface";
import { SubCategory } from "./subCategory";

export class BaseFormula implements FormulaInterface{

    constructor(public name: string, public parent: SubCategory) {}
    
    calculate({...params}) {
        return 'a';
    }
}