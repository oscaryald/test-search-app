import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'stops'
})
export class StopsPipe implements PipeTransform {
  transform(value: number): string {
       let result: string = `${value} пересадки`;
       if (value === 1) {
           result = `${value} пересадка`;
       } else if (value === 0) {
           result = 'без пересадок';
       }
       return result;
  }
}