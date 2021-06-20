import { Component, Input, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/store/students/models/student.model';
import { applicationColors } from '@core/consts/applicationColors';

@Component({
  selector: 'app-students-list-item',
  templateUrl: './students-list-item.component.html',
  styleUrls: ['./students-list-item.component.scss'],
})
export class StudentsListItemComponent {
  @Input() student: StudentModel & { specializationNames: string[] };
  colors = applicationColors;
}
