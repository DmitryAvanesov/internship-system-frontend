import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentAccountRouting} from './student-account.routing';
import {SharedModule} from '@shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentAccountRouting,
    SharedModule,
  ]
})
export class StudentAccountModule { }
