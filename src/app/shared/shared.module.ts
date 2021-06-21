import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyAccountComponent } from '@shared/components/company-account/company-account.component';
import { StudentAccountComponent } from '@shared/components/student-account/student-account.component';
import { InterviewDatePipe } from '@core/pipes/interview-date.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    CompanyAccountComponent,
    StudentAccountComponent,
    InterviewDatePipe,
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [
    LoaderComponent,
    IonicModule,
    ReactiveFormsModule,
    CompanyAccountComponent,
    StudentAccountComponent,
    InterviewDatePipe,
  ],
})
export class SharedModule {}
