import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'extract'})
export class ExtractPipe implements PipeTransform {
  transform(arr: any[], prop:string):any[] {
    let aaa = arr.map((value)=> value[prop])
    return aaa;
  }
}