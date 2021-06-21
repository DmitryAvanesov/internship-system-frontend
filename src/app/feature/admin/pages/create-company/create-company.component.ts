import { Component, OnInit } from '@angular/core';
import { CompanyModel } from '@store/companies/models/company.model';
import { MockSpecialization } from '@companies/pages/company/company.component';
import { StudentModel } from '@store/students/models/student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadStudents } from '@store/students/students.actions';
import {
  changeCompany,
  createCompany,
  loadCompanies,
} from '@store/companies/companies.actions';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss'],
})
export class CreateCompanyComponent implements OnInit {
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
    {
      id: '1',
      userName: 'Ivan',
      score: Math.round(Math.random() * 500) / 100,
      interviews: [],
    },
    {
      id: '2',
      userName: 'Ivan',
      score: Math.round(Math.random() * 500) / 100,
      interviews: [],
    },
    {
      id: '3',
      userName: 'Ivan',
      score: Math.round(Math.random() * 500) / 100,
      interviews: [],
    },
  ];

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    info: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadStudents());
    this.store.dispatch(loadCompanies());
  }

  save() {
    const newCompany: CompanyModel = {
      specializations: [],
      technologies: [],
      files: [],
      positions: [],
      ...this.form.value,
    };
    this.store.dispatch(createCompany({ company: newCompany }));
  }
}
