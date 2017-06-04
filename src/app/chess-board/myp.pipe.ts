import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myp'
})
export class MypPipe implements PipeTransform {

 public transform(map: any): any[] {
    if (!map) return [];
    return Object.keys(map).map(k => map[k]);
  }

}
