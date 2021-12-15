import { BaseFormula } from "../baseFormula";
import { PersonalData } from "../personalData";

export class TestFormula6 extends BaseFormula{
    componentName:string = 'FormulaTest6'

    calculateFree({...params}) {
        return 'calculateFree in TestFormula6';
    }

    calculate(personalData:PersonalData){
        return 'calculate in TestFormula6';
    }
}