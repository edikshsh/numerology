import { BaseFormula } from "../baseFormula";
import { PersonalData } from "../personalData";

export class TestFormula3 extends BaseFormula{
    componentName:string = 'FormulaTest3'

    calculateFree({...params}) {
        return 'calculateFree in TestFormula2';
    }

    calculate(personalData:PersonalData){
        return 'calculate in TestFormula2';
    }
}