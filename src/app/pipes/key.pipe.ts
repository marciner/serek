//Stackoverflow of course


import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'key'})
export class KeyPipe implements PipeTransform {
  transform(value, args:any) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}