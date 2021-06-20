import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppState } from '../root.reducer'
import { CompaniesState } from './companies.state'
import { companiesAdapter } from './companies.reducer'

const selectCompanies = createFeatureSelector<AppState, CompaniesState>(
    'companies'
)

export const { selectAll: selectAllCompanies } =
    companiesAdapter.getSelectors(selectCompanies)

export const selectCompaniesLoading = createSelector(
    selectCompanies,
    (state) => state.companiesLoading
)
