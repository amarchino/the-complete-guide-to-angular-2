import { input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number, inputType: 'cel' | 'fah', outputType: 'cel' | 'fah' = inputType): string {
    let val: number;
    if(typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let outputTemp = val;
    if(inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 5) + 32;
    } else if(inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    }
    const symbol: '°C' |'°F' = outputType === 'cel' ? '°C' : '°F';
    return `${outputTemp.toFixed(2)} ${symbol}`;
  }

}
