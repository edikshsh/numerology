import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'unique'})
export class UniquePipe implements PipeTransform {
  transform(arr: any[]):any[] {
      let temp:any[] = []
      arr.filter((item) =>{
          if(temp.indexOf(item)===-1){
              temp.push(item)
              return true;
          }
          return false;
      });
      return temp;
  }
}