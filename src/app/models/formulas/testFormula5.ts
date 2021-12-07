import { BaseFormula } from "../baseFormula";
import { PersonalData } from "../personalData";

export class TestFormula5 extends BaseFormula{
    componentName:string = 'FormulaTest5'

    calculateFree({...params}) {
        return 'calculateFree in TestFormula2';
    }

    calculate(personalData:PersonalData){
        return 'calculate in TestFormula2';
    }
}