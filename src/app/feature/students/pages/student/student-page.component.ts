import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCompanies } from '@store/companies/companies.actions';
import { selectAllCompanies } from '@store/companies/companies.selectors';
import {combineLatest, Observable} from 'rxjs';
import { selectRouteParam } from 'src/app/store/router/router.selectors';
import { StudentModel } from 'src/app/store/students/models/student.model';
import { loadStudents } from 'src/app/store/students/students.actions';
import { studentsReducer } from 'src/app/store/students/students.reducer';
import { selectStudent } from 'src/app/store/students/students.selectors';
import {selectUserRoles} from '@store/auth/auth.selectors';
import {RolesEnum} from '@core/enums/roles.enum';
import {DictionaryElementModel} from '@store/dictionaries/models/dictionary-element.model';
import {
  selectAllSpecializationEntities,
  selectAllSpecializations,
  selectAllTechnologies,
  selectAllTechnologyEntities
} from '@store/dictionaries/dictionaries.selectors';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss'],
})
export class StudentPageComponent implements OnInit {
  routeId$ = this.store.select(selectRouteParam('id'));
  companies$ = this.store.select(selectAllCompanies);
  student$: Observable<StudentModel>;

  userRoles$ = this.store.select(selectUserRoles);
  adminRole = RolesEnum.Admin;

  specializations$ = this.store.select(selectAllSpecializationEntities);
  technologies$ = this.store.select(selectAllTechnologyEntities);

  specializations: string[] = [];
  technologies: string[] = [];

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadStudents());
    this.store.dispatch(loadCompanies());

    this.routeId$.subscribe((id) => {
      this.student$ = this.store.select(selectStudent, { id });
    });

    combineLatest([this.student$, this.specializations$])
      .pipe(filter(([student, specializations]) =>
        !!student && !!specializations
      ))
      .subscribe(([student, specializations]) => {
        this.specializations = student.specializations.map((id) => specializations[id].name);
      });
    combineLatest([this.student$, this.technologies$])
      .pipe(filter(([student, technologies]) =>
        !!student && !!technologies
      ))
      .subscribe(([student, technologies]) => {
        this.technologies = student.technologies.map((id) => technologies[id].name);
      });
  }
}
