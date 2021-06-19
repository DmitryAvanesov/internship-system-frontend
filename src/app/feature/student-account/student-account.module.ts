import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAccountRouting } from './student-account.routing';
import { SharedModule } from '@shared/shared.module';
import { StudentAccountComponent } from '@student-account/../../shared/components/student-account/student-account.component';

@NgModule({
  declarations: [StudentAccountComponent],
  imports: [CommonModule, StudentAccountRouting, SharedModule],
})
export class StudentAccountModule {}
