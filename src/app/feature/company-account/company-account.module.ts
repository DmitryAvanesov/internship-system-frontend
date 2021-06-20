import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyAccountRouting } from './company-account.routing';
import { SharedModule } from '@shared/shared.module';
import { CompanyAccountComponent } from '@company-account/pages/company-account/company-account.component';

@NgModule({
  declarations: [CompanyAccountComponent],
  imports: [CommonModule, CompanyAccountRouting, SharedModule],
})
export class CompanyAccountModule {}
