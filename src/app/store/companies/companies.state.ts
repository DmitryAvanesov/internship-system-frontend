import { EntityState } from '@ngrx/entity';
import { CompanyModel } from './models/company.model';

export interface CompaniesState extends EntityState<CompanyModel> {
  companiesLoading: boolean;
}
