import { Component, Input, OnInit } from '@angular/core';
import { PythagorasMatrixCellTrait } from '../formula-test3.component';

@Component({
  selector: 'app-pythagoras-matrix-cell',
  templateUrl: './pythagoras-matrix-cell.component.html',
  styleUrls: ['./pythagoras-matrix-cell.component.css']
})
export class PythagorasMatrixCellComponent implements OnInit {

  // @Input() num:number = 0
  // @Input() text:string = 'default text'
  // @Input() color:string = 'black'

  @Input() traits:PythagorasMatrixCellTrait[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
