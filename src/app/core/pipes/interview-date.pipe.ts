import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interviewDate',
})
export class InterviewDatePipe implements PipeTransform {
  transform(dateString: string): string {
    const dateObj = new Date(dateString);

    return `${dateObj.getDate()}.${
      dateObj.getMonth() + 1
    }.${dateObj.getFullYear()}`;
  }
}
