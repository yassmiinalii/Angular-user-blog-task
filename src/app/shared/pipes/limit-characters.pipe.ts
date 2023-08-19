import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters'
})
export class LimitCharactersPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any, limit: number = 100) {
    if (value.length > limit) {
      return value.substr(0, limit) + ' ...';
    }
    return value;
  }

}
