import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-period-table-range-cell',
  templateUrl: './life-period-table-range-cell.component.html',
  styleUrls: ['./life-period-table-range-cell.component.css']
})
export class LifePeriodTableRangeCellComponent implements OnInit {

  @Input() gilGoralyArr:number[] = []
  @Input() range:number[] = []
  @Input() shnotGoral:number[] = []
  @Input() bashlut:number = 0

  showShnotGoral:boolean = false;
  showBashlut:boolean = false;

  shnotGoralInRange = this.shnotGoral;
  constructor() {

   }

  ngOnInit(): void {
    this.showBashlut = this.bashlut >= this.range[0] && this.bashlut < this.range[1]
    // console.log(this.showBashlut);

    this.gilGoralyArr = this.gilGoralyArr.filter((val,i)=>val >= this.range[0] && val < this.range[1])
    this.shnotGoralInRange = [Math.max(this.range[0],this.shnotGoral[0]), Math.min(this.range[1],this.shnotGoral[1])]
    console.log(`shnot goral in range: [${this.shnotGoralInRange[0]} - ${this.shnotGoralInRange[1]}]`);
    
    if (this.shnotGoralInRange[0] < this.shnotGoralInRange[1]){
      this.showShnotGoral = true;
    } 
    console.log(this.showShnotGoral);
  }

}
