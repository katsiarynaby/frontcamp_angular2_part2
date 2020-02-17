
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DatePipe'
})

export class DatePipe implements PipeTransform {

  transform(value: Date): string {
    return value.toISOString().substr(0, 10);
  }
}
