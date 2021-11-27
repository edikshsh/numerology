import { BaseFormula } from "../baseFormula";

export class TestFormula1 extends BaseFormula{
    
    calculate({...params}) {
        return 'TestFormula1'
    }
}