import { Component, OnInit } from '@angular/core';
import { StudentModel } from '@store/students/models/student.model';
import {Store} from '@ngrx/store';
import {loadCompanies} from '@store/companies/companies.actions';
import {loadStudents} from '@store/students/students.actions';
import {Observable} from 'rxjs';
import {CompanyModel} from '@store/companies/models/company.model';
import {selectRouteParam} from '@store/router/router.selectors';
import {selectAllCompanies, selectCompany} from '@store/companies/companies.selectors';
import {selectStudent} from '@store/students/students.selectors';
import {selectUserRoles} from '@store/auth/auth.selectors';
import {RolesEnum} from '@core/enums/roles.enum';

export interface MockSpecialization {
  id: string;
  name: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {

  company$: Observable<CompanyModel>;
  routeId$ = this.store.select(selectRouteParam('id'));

  userRoles$ = this.store.select(selectUserRoles);
  adminRole = RolesEnum.Admin;

  specializations: MockSpecialization[] = [
    {
      id: '1',
      name: 'Specialization 1',
      isOpen: true,
    },
    {
      id: '2',
      name: 'Specialization 2',
      isOpen: false,
    },
  ];
  students: StudentModel[] = [
    { id: '1', userName: 'Ivan', score: Math.round(Math.random() * 500) / 100 },
    { id: '2', userName: 'Ivan', score: Math.round(Math.random() * 500) / 100 },
    { id: '3', userName: 'Ivan', score: Math.round(Math.random() * 500) / 100 },
  ];
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadStudents());
    this.store.dispatch(loadCompanies());

    this.routeId$.subscribe((id) => {
      this.company$ = this.store.select(selectCompany, { id });
    });
  }

  toggleSpecialization(id: string) {
    const specializationIndex = this.specializations.findIndex(
      (el) => el.id === id
    );
    if (specializationIndex !== -1) {
      const newSpecializations = [...this.specializations];
      newSpecializations[specializationIndex] = {
        ...newSpecializations[specializationIndex],
        isOpen: !newSpecializations[specializationIndex].isOpen,
      };
      this.specializations = newSpecializations;
    }
  }
}
