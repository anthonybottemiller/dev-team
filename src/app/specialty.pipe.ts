import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Teammate } from './teammate.model';
@Pipe({
  name: 'specialty'
})
export class SpecialtyPipe implements PipeTransform {

  transform(input: Teammate[], specialty) {
    var output: Teammate[] = [];
    if(specialty === "Front-End") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].specialty === "Front-End") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (specialty === "Back-End") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].specialty === "Back-End") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
