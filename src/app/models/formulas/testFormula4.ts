import { BaseFormula } from "../baseFormula";
import { PersonalData } from "../personalData";

export class TestFormula4 extends BaseFormula{
    componentName:string = 'FormulaTest4'

    calculateFree({...params}) {
        return 'calculateFree in TestFormula2';
    }

    calculate(personalData:PersonalData){
        return 'calculate in TestFormula2';
    }
}