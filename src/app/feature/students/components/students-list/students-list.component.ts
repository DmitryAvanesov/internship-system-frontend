import { Component, Input } from '@angular/core';
import { StudentModel } from '@store/students/models/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})
export class StudentsListComponent {
  @Input() students: (StudentModel & { specializationNames: string[] })[];
}
