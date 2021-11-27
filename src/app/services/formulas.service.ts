import { Injectable } from '@angular/core';
import { BaseFormula } from '../models/baseFormula'
import { MainCategory } from '../models/mainCategory';
import { SubCategory } from '../models/subCategory';

import { TestFormula1, TestFormula2, TestFormula3, TestFormula4, TestFormula5 } from '../models/formulas/allFormulas'
import { FormulaOld } from '../models/formulas';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {

  formulas: Map<string, BaseFormula> = new Map();
  subCategories: Map<string, SubCategory> = new Map();
  mainCategories: Map<string, MainCategory> = new Map();

  constructor() {
    this.initFormulas();
  }

  initFormulas() {

    let m1 = new MainCategory('MainCategory1')
    let m2 = new MainCategory('MainCategory2')
    this.mainCategories.set('MainCategory1', m1)
    this.mainCategories.set('MainCategory2', m2)

    let s1 = new SubCategory('SubCategory1', m1)
    let s2 = new SubCategory('SubCategory2', m1)
    let s3 = new SubCategory('SubCategory3', m2)
    let s4 = new SubCategory('SubCategory4', m2)
    this.subCategories.set('SubCategory1', s1)
    this.subCategories.set('SubCategory2', s2)
    this.subCategories.set('SubCategory3', s3)
    this.subCategories.set('SubCategory4', s4)

    let f1 = new TestFormula1('Formula1', s1)
    let f2 = new TestFormula2('Formula2', s2)
    let f3 = new TestFormula3('Formula3', s3)
    let f4 = new TestFormula4('Formula4', s3)
    let f5 = new TestFormula5('Formula5', s4)
    this.formulas.set('Formula1', f1)
    this.formulas.set('Formula2', f2)
    this.formulas.set('Formula3', f3)
    this.formulas.set('Formula4', f4)
    this.formulas.set('Formula5', f5)
  }

  getFormulasSimplified(){
    let arr : FormulaOld[] = []
    for (const [k,v] of this.formulas){
      arr.push(new FormulaOld(v.parent.parent.name,v.parent.name,k))
    }
    return arr;
  }

  isFormulaInSubCategory(formula:string, subCategory:string){
    return this.formulas.get(formula)?.parent.name === subCategory
  }

  isFormulaInMainCategory(formula:string, mainCategory:string){
    return this.formulas.get(formula)?.parent.parent.name === mainCategory
  }

  isSubCategoryInMainCategory(subCategory:string, mainCategory:string){
    return this.subCategories.get(subCategory)?.parent.name === mainCategory
  }

  // isFormulaInSubCategory(formula:string, subCategory:string, lenient:boolean = true){
  //   let subCategoryName = this.subCategories.get(formula)?.parent.name
  //   if (lenient && (!subCategoryName || !subCategory)){
  //     return true
  //   }
  //   return subCategoryName === subCategory
  // }

  // isFormulaInMainCategory(formula:string, mainCategory:string, lenient:boolean = true){
  //   let mainCategoryName = this.formulas.get(formula)?.parent.parent.name
  //   if (lenient && (!mainCategoryName || !mainCategory)){
  //     return true
  //   }
  //   return mainCategoryName === mainCategory
  // }

  // isSubCategoryInMainCategory(subCategory:string, mainCategory:string, lenient:boolean = true){
  //   let mainCategoryName = this.subCategories.get(subCategory)?.parent.name
  //   if (lenient && (!mainCategoryName || !mainCategory)){
  //     return true
  //   }
  //   return mainCategoryName === mainCategory
  // }
}
