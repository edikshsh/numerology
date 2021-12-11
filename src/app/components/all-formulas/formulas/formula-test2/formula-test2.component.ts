import { Component, OnInit } from '@angular/core';
import { TestFormula2 } from 'src/app/models/formulas/testFormula2';
import { LifePeriod } from 'src/app/models/life-period';
import { PersonalData } from 'src/app/models/personalData';
import { CalculationsService } from 'src/app/services/calculations.service';
import { FormulasService } from 'src/app/services/formulas.service';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import { Periods } from '../../../../enums/periods'

export class LifePeriodTableRow {
  // name: string;
  // range: string;
  // pisga: number;
  // etgar: number
  // energyaNosefet: number;

  constructor(public name: string, public range: number[], public pisga: number, public etgar: number, public energiaNosefet: number) { }
}



@Component({
  selector: 'app-formula-test2',
  templateUrl: './formula-test2.component.html',
  styleUrls: ['./formula-test2.component.css', './life-period-table-range-cell/life-period-table-range-cell.component.css']
})


export class FormulaTest2Component implements OnInit {


  lifePeriods: LifePeriod[] = []
  gilBashlut: number = 0;

  formula?: TestFormula2
  personalData: PersonalData = new PersonalData('fname', 'lname');
  shnotGoral: number[] = []
  gilGoraly: number[] = []
  bashlut:number = 0

  // displayedColumns: string[] = ['name', 'start', 'end', 'pisga', 'etgar', 'energiaNosefet'];
  displayedColumns: string[] = ['energiaNosefet', 'name', 'range', 'pisga', 'etgar'];

  displayedData: LifePeriodTableRow[] = []

  constructor(private formulasService: FormulasService, private personalDataService: PersonalDataService, private calc: CalculationsService) {
    this.formula = formulasService.selectedFormula;
    // this.buildOtherData()

  }

  ngOnInit(): void {
    this.refreshData();
    this.personalDataService.register(()=>this.refreshData())
  }

  refreshData(){
    console.log('Test formula 2 refreshing data');
    this.buildOtherData()
    this.buildLifePeriods();
    this.builtTable();
  }

  buildOtherData(){
    this.personalData = this.personalDataService.personalData || new PersonalData('fname', 'lname');
    this.gilBashlut = 27 - this.calc.nativGoral(this.personalData.birthdate);
    this.shnotGoral = [45 - this.calc.nativGoral(this.personalData.birthdate), 50 - this.calc.nativGoral(this.personalData.birthdate)];
    this.gilGoraly = [this.calc.gilGorali1(this.personalData.birthdate),
    this.calc.gilGorali2(this.personalData.birthdate),
    this.calc.gilGorali3(this.personalData.birthdate),
    this.calc.gilGorali4(this.personalData.birthdate)]
    this.bashlut = 27-this.calc.nativGoral(this.personalData.birthdate)

  }

  buildLifePeriods(){

    let day = this.personalData.birthdate.getDate()
    let month = this.personalData?.birthdate?.getMonth() + 1
    let year = this.personalData?.birthdate?.getFullYear()

    this.lifePeriods = [];
    this.lifePeriods.push(new LifePeriod('Meatsev',
      0,
      36 - this.calc.nativGoral(this.personalData.birthdate),
      this.calc.keepInRange(day + month, 1, 9),
      Math.abs(this.calc.keepInRange(day,1,9) - this.calc.keepInRange(month,1,9)),
      this.calc.keepInRange(month, 1, 9)
    ))

    this.lifePeriods.push(new LifePeriod('Yotser1',
      this.lifePeriods[0].end,
      this.lifePeriods[0].end + 9,
      this.calc.keepInRange(day + year, 1, 9),
      Math.abs(this.calc.keepInRange(day,1,9) - this.calc.keepInRange(year,1,9)),
      this.calc.keepInRange(day, 1, 9)
    ))

    this.lifePeriods.push(new LifePeriod('Yotser2',
      this.lifePeriods[1].end,
      this.lifePeriods[1].end + 9,
      this.calc.keepInRange(this.lifePeriods[0].pisga + this.lifePeriods[1].pisga, 1, 9),
      Math.abs(this.lifePeriods[0].etgar -this.lifePeriods[1].etgar),
      this.calc.keepInRange(day, 1, 9)
    ))

    this.lifePeriods.push(new LifePeriod('Katsir',
      this.lifePeriods[2].end,
      120,
      this.calc.keepInRange(month + year, 1, 9),
      Math.abs(this.calc.keepInRange(month,1,9) - this.calc.keepInRange(year,1,9)),
      this.calc.keepInRange(year, 1, 9)
    ))
  }


  builtTable() {
    this.displayedData = []
    this.lifePeriods.forEach((lp, i) => {
      this.displayedData.push(new LifePeriodTableRow(
        this.lifePeriods[i].name,
        // `${this.lifePeriods[i].start} - ${this.lifePeriods[i].end}`,
        [this.lifePeriods[i].start,this.lifePeriods[i].end],
        // `<span class=shnotGoral> ${this.lifePeriods[i].start} - ${this.lifePeriods[i].end}</span>`,

        this.lifePeriods[i].pisga,
        this.lifePeriods[i].etgar,
        this.lifePeriods[i].energiaNosefet
      ))
    })
  }

}
