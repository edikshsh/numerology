import { Component, OnInit } from '@angular/core';

export class PythagorasMatrixCellTrait {
  constructor(public num: number, public text: string, public color: string) { }
}

export enum MapType {
  MAP1, MAP2, MAP3, MAP4
}


@Component({
  selector: 'app-formula-test3',
  templateUrl: './formula-test3.component.html',
  styleUrls: ['./formula-test3.component.css']
})



export class FormulaTest3Component implements OnInit {

  num = 1;
  text = 'text from formula3.ts'
  color = 'grey'

  // mat: number[][] = [[1,2,3],[4,5,6],[7,8,9]]
  // texts:string[][] = [['string1','string2','string3'],
  // ['string4','string5','string6'],
  // ['string7','string8','string9']]

  // colors:string[][] = [['blue','red','green'],['black','grey','brown'],['cyan','purple','orange']]

  maps: number[][][] = []
  texts: string[][][] = []
  colors: string[] = []


  displayedData: PythagorasMatrixCellTrait[][][] = []
  displayedColumns = ['c1', 'c2', 'c3']

  constructor() {
    this.maps[MapType.MAP1] = [
      [3, 6, 9], [2, 5, 8], [1, 4, 7]
    ]
    this.maps[MapType.MAP2] = [
      [4, 9, 2], [3, 5, 7], [8, 1, 6]
    ]
    this.maps[MapType.MAP3] = [
      [1, 4, 7], [2, 5, 8], [3, 6, 9]
    ]
    this.maps[MapType.MAP4] = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9]
    ]

    this.texts[MapType.MAP1] = [
      ['MAP1 text3', 'MAP1 text6', 'MAP1 text9'], ['MAP1 text2', 'MAP1 text5', 'MAP1 text8'], ['MAP1 text1', 'MAP1 text4', 'MAP1 text7']
    ]
    this.texts[MapType.MAP2] = [
      ['MAP2 text4', 'MAP2 text9', 'MAP2 text2'], ['MAP2 text3', 'MAP2 text5', 'MAP2 text7'], ['MAP2 text8', 'MAP2 text4', 'MAP2 text6']
    ]
    this.texts[MapType.MAP3] = [
      ['MAP3 text1', 'MAP3 text4', 'MAP3 text7'], ['MAP3 text2', 'MAP3 text5', 'MAP3 text8'], ['MAP3 text3', 'MAP3 text6', 'MAP3 text9']
    ]
    this.texts[MapType.MAP4] = [
      ['MAP4 text1', 'MAP4 text2', 'MAP4 text3'], ['MAP4 text4', 'MAP4 text5', 'MAP4 text6'], ['MAP4 text7', 'MAP4 text8', 'MAP4 text9']
    ]

    this.colors = ['black','blue','green','red']    
  }

  ngOnInit(): void {

    // this.maps.forEach((map,i) => {
    //   map.forEach((row,j) => {
    //     if (i==0){this.displayedData[j] = []}
    //     row.forEach((cell,k)=>{
    //       if (i==0){
    //         this.displayedData[j][k] = []
    //       }
    //       console.log(this.displayedData);
          
    //       this.displayedData[j][k][i] = new PythagorasMatrixCellTrait(this.maps[i][j][k],this.texts[i][j][k],this.colors[i])
    //     })
    //   })
    // });
    let  allMaps = Object.keys(MapType).filter((item) => !isNaN(Number.parseInt(item))).map(item=>Number.parseInt(item))
    // console.log(Number.parseInt(Object.keys(MapType)[4]));    

    // this.createDisplayDataForMaps2(MapType.MAP4, MapType.MAP1, MapType.MAP2)
    this.displayedData = this.createDisplayDataForMaps(...allMaps)

  }

  createDisplayDataForMaps(...chosenMaps:MapType[]){

    // this.maps.filter((map,mapIndex)=>(chosenMaps.find(chosenMap=>mapIndex === chosenMap))!== undefined).
    let displayedData: PythagorasMatrixCellTrait[][][] = []
    chosenMaps.forEach((chosenMap,i) => {
      // let i = chosenMaps[l]
      this.maps[chosenMap].forEach((row,j) => {
        if (i==0){displayedData[j] = []}
        row.forEach((cell,k)=>{
          if (i==0){
            displayedData[j][k] = []
          }
          let newCell = new PythagorasMatrixCellTrait(this.maps[chosenMap][j][k],this.texts[chosenMap][j][k],this.colors[chosenMap])
          console.log(newCell);
          
          displayedData[j][k][i] = newCell
        })
      })
    });

    return displayedData;

  }
}
