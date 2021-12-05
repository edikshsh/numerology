// enum MainCategory {
//     MAIN_CATEGORY_PLACEHOLDER1='MAIN_CATEGORY_PLACEHOLDER1',
//     MAIN_CATEGORY_PLACEHOLDER2='MAIN_CATEGORY_PLACEHOLDER2',
//     MAIN_CATEGORY_PLACEHOLDER3='MAIN_CATEGORY_PLACEHOLDER3'
// }

// enum SubCategory {
//     SUB_CATEGORY_PLACEHOLDER1='SUB_CATEGORY_PLACEHOLDER1',
//     SUB_CATEGORY_PLACEHOLDER2='SUB_CATEGORY_PLACEHOLDER2',
//     SUB_CATEGORY_PLACEHOLDER3='SUB_CATEGORY_PLACEHOLDER3'
// }

// class Formula {

//     constructor(public mainCategory: MainCategory, public subCategory: SubCategory, public text?: string) {

//     }
// }


class FormulaOld {

    constructor(public mainCategory: string, public subCategory: string, public name?: string) {

    }
}

export {
    // MainCategory,
    // SubCategory,
    FormulaOld,
    createTestData,
}

// function createTestData(): Formula[] {
//     let testFormulas = [new Formula(MainCategory.MAIN_CATEGORY_PLACEHOLDER1, SubCategory.SUB_CATEGORY_PLACEHOLDER1, 'formula1'),
//     new Formula(MainCategory.MAIN_CATEGORY_PLACEHOLDER1, SubCategory.SUB_CATEGORY_PLACEHOLDER2, 'formula2'),
//     new Formula(MainCategory.MAIN_CATEGORY_PLACEHOLDER1, SubCategory.SUB_CATEGORY_PLACEHOLDER3, 'formula3'),
//     new Formula(MainCategory.MAIN_CATEGORY_PLACEHOLDER2, SubCategory.SUB_CATEGORY_PLACEHOLDER1, 'formula4'),
//     new Formula(MainCategory.MAIN_CATEGORY_PLACEHOLDER2, SubCategory.SUB_CATEGORY_PLACEHOLDER1, 'formula5'),
//     new Formula(MainCategory.MAIN_CATEGORY_PLACEHOLDER2, SubCategory.SUB_CATEGORY_PLACEHOLDER2, 'formula6'),
//     new Formula(MainCategory.MAIN_CATEGORY_PLACEHOLDER2, SubCategory.SUB_CATEGORY_PLACEHOLDER3, 'formula7'),
//     new Formula(MainCategory.MAIN_CATEGORY_PLACEHOLDER2, SubCategory.SUB_CATEGORY_PLACEHOLDER3, 'formula8'),
//     new Formula(MainCategory.MAIN_CATEGORY_PLACEHOLDER3, SubCategory.SUB_CATEGORY_PLACEHOLDER1, 'formula9'),
//     new Formula(MainCategory.MAIN_CATEGORY_PLACEHOLDER3, SubCategory.SUB_CATEGORY_PLACEHOLDER2, 'formula10'),
//     new Formula(MainCategory.MAIN_CATEGORY_PLACEHOLDER3, SubCategory.SUB_CATEGORY_PLACEHOLDER2, 'formula11'),
//     new Formula(MainCategory.MAIN_CATEGORY_PLACEHOLDER3, SubCategory.SUB_CATEGORY_PLACEHOLDER3, 'formula12'),
//     ]


//     return testFormulas;
// }

function createTestData(): FormulaOld[] {
    let testFormulas = [
        new FormulaOld('MAIN_CATEGORY_PLACEHOLDER1', 'SUB_CATEGORY_PLACEHOLDER11', 'formula1'),
        new FormulaOld('MAIN_CATEGORY_PLACEHOLDER1', 'SUB_CATEGORY_PLACEHOLDER12', 'formula2'),
        new FormulaOld('MAIN_CATEGORY_PLACEHOLDER1', 'SUB_CATEGORY_PLACEHOLDER13', 'formula3'),
        new FormulaOld('MAIN_CATEGORY_PLACEHOLDER2', 'SUB_CATEGORY_PLACEHOLDER21', 'formula4'),
        new FormulaOld('MAIN_CATEGORY_PLACEHOLDER2', 'SUB_CATEGORY_PLACEHOLDER21', 'formula5'),
        new FormulaOld('MAIN_CATEGORY_PLACEHOLDER2', 'SUB_CATEGORY_PLACEHOLDER22', 'formula6'),
        new FormulaOld('MAIN_CATEGORY_PLACEHOLDER2', 'SUB_CATEGORY_PLACEHOLDER23', 'formula7'),
        new FormulaOld('MAIN_CATEGORY_PLACEHOLDER2', 'SUB_CATEGORY_PLACEHOLDER23', 'formula8'),
        new FormulaOld('MAIN_CATEGORY_PLACEHOLDER3', 'SUB_CATEGORY_PLACEHOLDER31', 'formula9'),
        new FormulaOld('MAIN_CATEGORY_PLACEHOLDER3', 'SUB_CATEGORY_PLACEHOLDER32', 'formula10'),
        new FormulaOld('MAIN_CATEGORY_PLACEHOLDER3', 'SUB_CATEGORY_PLACEHOLDER32', 'formula11'),
        new FormulaOld('MAIN_CATEGORY_PLACEHOLDER3', 'SUB_CATEGORY_PLACEHOLDER33', 'formula12'),
    ]


    return testFormulas;
}


