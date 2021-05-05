import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesRouting } from '@companies/companies.routing';
import {EffectsModule} from '@ngrx/effects';
import {CompaniesEffects} from '../../store/companies/companies.effects';
import {SharedModule} from '@shared/shared.module';
import { CompanyComponent } from './pages/company/company.component';
import { CompaniesListComponent } from './pages/companies-list/companies-list.component';
import {PriorityStudentsListItemComponent} from '@companies/components/priority-students-list-item/priority-students-list-item.component';


@NgModule({
  declarations: [
    CompaniesListComponent,
    CompanyComponent,
    PriorityStudentsListItemComponent,
  ],
  imports: [
    CommonModule,
    CompaniesRouting,
    EffectsModule.forFeature([CompaniesEffects]),
    SharedModule,
  ]
})
export class CompaniesModule { }
