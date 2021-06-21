import { Component, OnInit } from '@angular/core';
import {
  selectAllSpecializations,
  selectAllTechnologies,
} from '@store/dictionaries/dictionaries.selectors';
import { Store } from '@ngrx/store';
import { StudentsApiService } from '@core/services/students-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentModel } from '@store/students/models/student.model';
import { selectRouteParam } from '@store/router/router.selectors';
import {
  selectAllCompanies,
  selectCompanyEntities,
} from '@store/companies/companies.selectors';
import { combineLatest, Observable } from 'rxjs';
import { changeStudent, loadStudents } from '@store/students/students.actions';
import { loadCompanies } from '@store/companies/companies.actions';
import {
  selectStudent,
  selectStudentsLoading,
} from '@store/students/students.selectors';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { filter, tap } from 'rxjs/operators';
import { loadPositions } from '@store/positions/positions.actions';
import {
  selectAllPositions,
  selectPositionEntities,
} from '@store/positions/positions.selectors';
import { selectAllStudentPriorities } from '@store/student-priorities/student-piorities.selectors';
import { loadStudentPriorities } from '@store/student-priorities/student-priorities.actions';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {
  allSpecializations$ = this.store.select(selectAllSpecializations);
  allTechnologies$ = this.store.select(selectAllTechnologies);

  routeId$ = this.store.select(selectRouteParam('id'));
  companies$ = this.store.select(selectCompanyEntities);
  student$: Observable<StudentModel>;
  studentsLoading$ = this.store.select(selectStudentsLoading);
  positions$ = this.store.select(selectAllPositions);
  studentPriorities$ = this.store.select(selectAllStudentPriorities);

  studentModel: StudentModel;
  shownPositions: { id: string; text: string }[];

  form = new FormGroup({
    info: new FormControl(''),
    specializations: new FormControl([]),
    technologies: new FormControl([]),
    priorities: new FormArray([new FormControl(undefined)]),
  });

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadStudents());
    this.store.dispatch(loadCompanies());
    this.store.dispatch(loadStudentPriorities());

    this.routeId$.subscribe((id) => {
      this.student$ = this.store.select(selectStudent, { id });
    });

    this.student$.pipe(filter((student) => !!student)).subscribe((student) => {
      this.studentModel = student;
      this.form.controls.info?.setValue(student.info);
      this.form.controls.specializations?.setValue(student.specializations);
      this.form.controls.technologies?.setValue(student.technologies);
    });

    combineLatest([this.companies$, this.positions$])
      .pipe(
        filter(
          ([companies, positions]) =>
            !!companies &&
            !!Object.keys(companies).length &&
            !!positions &&
            !!positions.length
        )
      )
      .subscribe(([companies, positions]) => {
        this.shownPositions = positions.map((el) => ({
          id: el.id,
          text: `${el.name} (${companies[el.companyId]?.userName})`,
        }));
        console.log(this.shownPositions);
      });

    // this.studentPriorities$.subscribe((data) => {});
  }

  save() {
    const newStudent: StudentModel = {
      ...this.studentModel,
      ...this.form.value,
    };
    console.log(newStudent);
    // this.store.dispatch(changeStudent({ newStudent }));
    // this.store.dispatch(loadPositions());
    // this.store.dispatch(changeStudent({newStudent: }))
  }

  removePosition(index: number) {
    (this.form.controls.priorities as FormArray).removeAt(index);
  }

  addPosition() {
    (this.form.controls.priorities as FormArray).controls.push(
      new FormControl(undefined)
    );
  }
}
