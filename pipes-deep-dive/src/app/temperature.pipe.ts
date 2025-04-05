import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number, ...args: unknown[]): string {
    let val: number;
    if(typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    const outputTemp = val * (9 / 5) + 32;
    return `${outputTemp} °F`;
  }

}
