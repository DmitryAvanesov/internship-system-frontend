import { Component, OnInit } from '@angular/core';
import {loadStudents} from '@store/students/students.actions';
import {changeCompany, loadCompanies} from '@store/companies/companies.actions';
import {selectAllCompanies, selectCompany} from '@store/companies/companies.selectors';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CompanyModel} from '@store/companies/models/company.model';
import {selectRouteParam} from '@store/router/router.selectors';
import {StudentModel} from '@store/students/models/student.model';
import {MockSpecialization} from '@companies/pages/company/company.component';
import {filter} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss'],
})
export class EditCompanyComponent implements OnInit {
  company$: Observable<CompanyModel>;
  routeId$ = this.store.select(selectRouteParam('id'));

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

  company: CompanyModel;

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    info: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadStudents());
    this.store.dispatch(loadCompanies());

    this.routeId$.subscribe((id) => {
      this.company$ = this.store.select(selectCompany, { id });
    });

    this.company$
      .pipe(filter((el) => !!el))
      .subscribe((company) => {
        this.company = company;
        this.form.controls.userName.setValue(company.userName);
        this.form.controls.info.setValue(company?.info);
        this.form.controls.email.setValue(company?.email);
      });
  }

  save() {
    const newCompany: CompanyModel = {...this.company, ...this.form.value};
    this.store.dispatch(changeCompany({company: newCompany}));
  }
}
