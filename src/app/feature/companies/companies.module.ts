import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesRouting } from '@companies/companies.routing';
import {EffectsModule} from '@ngrx/effects';
import {CompaniesEffects} from '../../store/companies/companies.effects';
import {CompaniesListComponent} from '@companies/companies-list/companies-list.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [
    CompaniesListComponent
  ],
  imports: [
    CommonModule,
    CompaniesRouting,
    EffectsModule.forFeature([CompaniesEffects]),
    SharedModule,
  ]
})
export class CompaniesModule { }
