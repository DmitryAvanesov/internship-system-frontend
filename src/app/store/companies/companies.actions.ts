import { createAction, props } from '@ngrx/store'
import { CompanyModel } from './models/company.model'

export const loadCompanies = createAction('[Companies] Load companies')
export const companiesLoaded = createAction(
    '[Companies] Companies loaded',
    props<{ companies: CompanyModel[] }>()
)
