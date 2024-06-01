import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'BytesToMB',
    pure: true
})
export class BytesToMB implements PipeTransform {
  transform(value: number): number {
    console.log('Pure pipe BytesToMB called');
    return ((value/1000)/1000);
  }
}