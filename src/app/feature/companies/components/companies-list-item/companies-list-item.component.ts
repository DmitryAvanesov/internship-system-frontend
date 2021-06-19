import { Component, Input, OnInit } from '@angular/core';
import { CompanyModel } from '../../../../store/companies/models/company.model';

@Component({
  selector: 'app-companies-list-item',
  templateUrl: './companies-list-item.component.html',
  styleUrls: ['./companies-list-item.component.scss'],
})
export class CompaniesListItemComponent implements OnInit {
  @Input() company: CompanyModel;
  constructor() {}

  ngOnInit() {}
}
