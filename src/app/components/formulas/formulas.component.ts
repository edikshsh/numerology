import { Component, OnInit } from '@angular/core';
// import {createTestData, MCat} from '../../models/formulas2'
import { createTestData, FormulaOld } from '../../models/formulas'
import { FormBuilder, Validators } from '@angular/forms'
import { FilterPipe } from '../../pipes/filter-pipe'
import { FormulasService } from 'src/app/services/formulas.service';


@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.css']
})
export class FormulasComponent implements OnInit {

  // allFormulas:FormulaOld[] = createTestData();
  allFormulas: FormulaOld[] = this.formulaService.getFormulasSimplified()
  // allFormulas:Map<string,MCat>= createTestData();

  selectedMainCategory: string = ''
  selectedSubCategory: string = ''
  selectedFormula: string = ''

  subCategoriesFilter: {} = {}
  formulaFilter: {} = {}


  test = ['a', 'b', 'v', 'b', 'a']
  constructor(private fb: FormBuilder, private formulaService: FormulasService) {
  }

  fg = this.fb.group({
    mainCategory: [''],
    subCategory: [''],
    formula: [''],
  });

  get mainCategory() { return this.fg.get('mainCategory') }
  get subCategory() { return this.fg.get('subCategory') }
  get formula() { return this.fg.get('formula') }

  onSubCategoryChange(event: any) {
    console.log(`Sub category changed to ${this.subCategory?.value} or ${event.value}`);
    if (!this.formulaService.isSubCategoryInMainCategory(this.subCategory?.value, this.mainCategory?.value)) {
      this.setMainCategorySearch(this.formulaService.subCategories.get(this.subCategory?.value)?.parent.name || '')
    }
    if (!this.formulaService.isFormulaInSubCategory(this.formula?.value, this.subCategory?.value)) {
      this.clearFormulaSearch()
    }
    this.refreshFilters()
  }

  onMainCategoryChange(event: any) {
    if (!this.formulaService.isSubCategoryInMainCategory(this.subCategory?.value, this.mainCategory?.value)) {
      this.setSubCategorySearch('')
    }
    if (!this.formulaService.isFormulaInMainCategory(this.formula?.value, this.mainCategory?.value)) {
      this.clearFormulaSearch()
    }
    this.refreshFilters()
  }

  onFormulaChange(event: any) {
    if (!this.formulaService.isFormulaInSubCategory(this.formula?.value, this.subCategory?.value)) {
      this.setSubCategorySearch(this.formulaService.formulas.get(this.formula?.value)?.parent.name || '')
    }
    if (!this.formulaService.isFormulaInMainCategory(this.formula?.value, this.mainCategory?.value)) {
      this.setMainCategorySearch(this.formulaService.formulas.get(this.formula?.value)?.parent.parent.name || '')
    }
    this.refreshFilters()
  }

  refreshFilters() {
    console.log(this.selectedMainCategory);
    
    this.subCategoriesFilter = { ...((this.selectedMainCategory !== '' && this.selectedMainCategory !== undefined) && { 'mainCategory': this.selectedMainCategory }) }
    this.formulaFilter = {
      ...((this.selectedMainCategory !== '' && this.selectedMainCategory !== undefined) && { 'mainCategory': this.selectedMainCategory }),
      ...((this.selectedSubCategory !== '' && this.selectedMainCategory !== undefined) && { 'subCategory': this.selectedSubCategory })
    }
  }

  setMainCategorySearch(str:string) {
    this.mainCategory?.setValue(str)
    this.selectedMainCategory = str
  }

  setSubCategorySearch(str:string) {
    this.subCategory?.setValue(str)
    this.selectedSubCategory = str
  }

  clearFormulaSearch() {
    this.formula?.setValue('')
    this.selectedFormula = ''
  }

  ngOnInit(): void {

  }

}
