import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectRouteParam } from 'src/app/store/router/router.selectors';
import { StudentModel } from 'src/app/store/students/models/student.model';
import { loadStudents } from 'src/app/store/students/students.actions';
import { studentsReducer } from 'src/app/store/students/students.reducer';
import { selectStudent } from 'src/app/store/students/students.selectors';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss'],
})
export class StudentPageComponent implements OnInit {
  routeId$ = this.store.select(selectRouteParam('id'));
  student$: Observable<StudentModel>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.routeId$.subscribe((id) => {
      this.student$ = this.store.select(selectStudent, { id });
    });
  }
}
