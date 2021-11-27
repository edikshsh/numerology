import { BaseFormula } from "../baseFormula";

export class TestFormula2 extends BaseFormula{
    
    calculate({...params}) {
        return 'TestFormula2'
    }
}