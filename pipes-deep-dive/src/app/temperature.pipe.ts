import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + ' - transformed';
  }

}
