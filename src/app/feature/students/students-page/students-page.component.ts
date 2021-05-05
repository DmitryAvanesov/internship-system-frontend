import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadStudents } from 'src/app/store/students/students.actions';
import { selectStudentsLoading } from 'src/app/store/students/students.selectors';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  studentsLoading$ = this.store.select(selectStudentsLoading);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadStudents());
  }
}
