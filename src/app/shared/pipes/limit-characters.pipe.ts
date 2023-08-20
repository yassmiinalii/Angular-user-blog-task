import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters',
})
export class LimitCharactersPipe implements PipeTransform {
  transform(value: any, limit: number = 100): string {
    if (typeof value !== 'string') {
      return '';
    }

    if (value.length > limit) {
      return value.substring(0, limit) + ' ...';
    }

    return value;
  }
}
