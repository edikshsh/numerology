class MCat {
    subCategories: Map<string, SCat> = new Map;

    constructor(public name: string, ...subCategories: SCat[]) {
        if (subCategories) {
            subCategories.forEach(subCategory => {
                this.subCategories.set(subCategory.name, subCategory)
            });;
        }
    }

    addSubCategory(subCategory: SCat) {
        this.subCategories.set(subCategory.name, subCategory)
        return this;
    }

    createSubCategory(name:string){
        let aaa = new SCat(name, this);
        this.subCategories.set(name, aaa);
        return this;
    }
}

class SCat {
    formulas: Map<string, Frm> = new Map;

    constructor(public name: string, public parent: MCat, ...formulas: Frm[]) {
        if (formulas){
            formulas.forEach(formula => {
                this.formulas.set(formula.name, formula)
            });
        }
    }

    addFormula(formula: Frm) {
        this.formulas.set(formula.name, formula)
        return this;
    }

    createFormula(name:string){
        let aaa = new Frm(name, this);
        this.formulas.set(name, aaa);
        return this;
    }
}
class Frm {

    constructor(public name: string, public parent: SCat) {}
}

function createTestData(){
    let formulas:string[][] = [['m1','s1','f1'],
    ['m1','m1s1','f1'],
    ['m1','m1s1','f2'],
    ['m1','m1s2','f3'],
    ['m1','m1s3','f4'],
    ['m2','m2s1','f5'],
    ['m2','m2s2','f6'],
    ['m2','m2s2','f7'],
    ['m2','m2s3','f8'],
    ['m2','m2s3','f9'],
    ['m2','m2s4','f10'],
    ['m3','m3s1','f11'],
    ['m3','m3s2','f12'],
    ['m3','m3s2','f13'],
    ['m3','m3s2','f14'],
]

let mainCats:Map<string, MCat> = new Map;

formulas.forEach(formulaData => {
    let mCat:MCat = mainCats.get(formulaData[0]) || new MCat(formulaData[0]);
    mainCats.set(formulaData[0], mCat);

    let sCat:SCat = mCat.subCategories.get(formulaData[1]) || new SCat(formulaData[1],mCat);
    mCat.addSubCategory(sCat)

    let formula:Frm = sCat.formulas.get(formulaData[2]) || new Frm(formulaData[2],sCat);
    sCat.addFormula(formula)
});

return mainCats;
}

export {
    MCat,
    SCat,
    Frm,
    createTestData
}