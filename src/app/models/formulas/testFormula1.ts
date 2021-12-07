import { BaseFormula } from "../baseFormula";
import { PersonalData } from "../personalData";

export class TestFormula1 extends BaseFormula{
    
    componentName:string = 'FormulaTest1'
    calculateFree({...params}) {
        let a = Object.entries(params)
        let str = ''
        a.forEach(([k,v]) => {
            str += `${k}:${v}\n`
        });
        return str
    }

    calculate(personalData:PersonalData){
        return 'calculate in TestFormula1';
    }
}