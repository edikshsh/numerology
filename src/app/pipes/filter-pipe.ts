import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
//   transform(arr: any[], filterFields:Map<string,any>):any[] {

//     let aaa = arr.filter((value)=> {
//         for (const [k,v] of filterFields.entries()){
//             if (value[k] !== v) {
//                 return false;
//             }
//         }
//         return true;
//     });
//     return aaa;
//   }

  transform(arr: any[], {...filterFields}):any[] {

    console.log(`filtering with values ${Object.entries(filterFields)}`);
    
    let aaa = arr.filter((value)=> {
        for (const [k,v] of Object.entries(filterFields)){
            if (value[k] !== v) {
                return false;
            }
        }
        return true;
    });
    return aaa;
  }
}