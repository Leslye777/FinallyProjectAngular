import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBr'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString() + ',00';
  }

}