import { Pipe, PipeTransform } from '@angular/core';
import { StudentModel } from '@store/students/models/student.model';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(student: StudentModel, ...args: unknown[]): unknown {
    return [student?.lastName, student?.firstName, student?.middleName]
      .filter((el) => !!el)
      .join(' ');
  }
}
