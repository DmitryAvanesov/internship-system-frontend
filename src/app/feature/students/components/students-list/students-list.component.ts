import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StudentModel } from '@store/students/models/student.model';
import { selectAllStudents } from 'src/app/store/students/students.selectors';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})
export class StudentsListComponent implements OnInit {
  @Input() students: (StudentModel & {specializationNames: string[]})[];

  constructor() {}

  ngOnInit() {}
}
