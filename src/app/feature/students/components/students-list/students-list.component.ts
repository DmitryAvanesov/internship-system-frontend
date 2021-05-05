import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllStudents } from 'src/app/store/students/students.selectors';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})
export class StudentsListComponent implements OnInit {
  students$ = this.store.select(selectAllStudents);

  constructor(private store: Store) {}

  ngOnInit() {}
}
