import { Component, OnInit } from '@angular/core';
import {selectAllSpecializations, selectAllTechnologies} from '@store/dictionaries/dictionaries.selectors';
import {Store} from '@ngrx/store';
import {StudentsApiService} from '@core/services/students-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentModel} from '@store/students/models/student.model';
import {selectRouteParam} from '@store/router/router.selectors';
import {selectAllCompanies} from '@store/companies/companies.selectors';
import {Observable} from 'rxjs';
import {changeStudent, loadStudents} from '@store/students/students.actions';
import {loadCompanies} from '@store/companies/companies.actions';
import {selectStudent, selectStudentsLoading} from '@store/students/students.selectors';
import {FormControl, FormGroup} from '@angular/forms';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {
  allSpecializations$ = this.store.select(selectAllSpecializations);
  allTechnologies$ = this.store.select(selectAllTechnologies);

  routeId$ = this.store.select(selectRouteParam('id'));
  companies$ = this.store.select(selectAllCompanies);
  student$: Observable<StudentModel>;
  studentsLoading$ = this.store.select(selectStudentsLoading);

  studentModel: StudentModel;

  form = new FormGroup({
    info: new FormControl(''),
    specializations: new FormControl([]),
    technologies: new FormControl([])
  });

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadStudents());
    this.store.dispatch(loadCompanies());

    this.routeId$.subscribe((id) => {
      this.student$ = this.store.select(selectStudent, { id });
    });

    this.student$
      .pipe(filter((student) => !!student))
      .subscribe((student) => {
        this.studentModel = student;
        this.form.controls.info?.setValue(student.info);
        this.form.controls.specializations?.setValue(student.specializations);
        this.form.controls.technologies?.setValue(student.technologies);
      });
  }

  save() {
    const newStudent: StudentModel = {
      ...this.studentModel,
      ...this.form.value,
    };
    this.store.dispatch(changeStudent({newStudent}));
    // this.store.dispatch(changeStudent({newStudent: }))
  }
}
