import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormetter'
})
export class DateFormetterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
