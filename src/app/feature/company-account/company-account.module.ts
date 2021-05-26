import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyAccountRouting} from './company-account.routing';
import {SharedModule} from '@shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompanyAccountRouting,
    SharedModule,
  ]
})
export class CompanyAccountModule { }
