import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { InterviewDatePipe } from '@core/pipes/interview-date.pipe';
import { FullNamePipe } from '@core/pipes/full-name.pipe';

@NgModule({
  declarations: [LoaderComponent, InterviewDatePipe, FullNamePipe],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [
    LoaderComponent,
    IonicModule,
    ReactiveFormsModule,
    InterviewDatePipe,
    FullNamePipe,
  ],
})
export class SharedModule {}
