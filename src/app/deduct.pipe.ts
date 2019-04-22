import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deduct'
})
export class DeductPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return (value-0.1*value);
  }

}
