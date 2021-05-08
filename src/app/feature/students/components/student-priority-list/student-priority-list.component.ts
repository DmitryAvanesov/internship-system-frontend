import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCompanies } from '@store/companies/companies.actions';
import { selectAllCompanies } from '@store/companies/companies.selectors';
import { CompanyModel } from '@store/companies/models/company.model';

@Component({
  selector: 'app-student-priority-list',
  templateUrl: './student-priority-list.component.html',
  styleUrls: ['./student-priority-list.component.scss'],
})
export class StudentPriorityListComponent implements OnInit {
  @Input() companies: CompanyModel[];

  constructor() {}

  ngOnInit() {}
}
