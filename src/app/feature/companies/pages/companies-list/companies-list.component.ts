import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectAllCompanies, selectCompaniesLoading} from '@store/companies/companies.selectors';
import { loadCompanies } from '@store/companies/companies.actions';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss'],
})
export class CompaniesListComponent implements OnInit {
  companies$ = this.store.select(selectAllCompanies);
  companiesLoading$ = this.store.select(selectCompaniesLoading);

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadCompanies());
  }

}
