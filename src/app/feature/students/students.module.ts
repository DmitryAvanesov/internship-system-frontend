import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRouting } from './students.routing';
import { SharedModule } from '@shared/shared.module';
import { StudentsListComponent } from '@students/students-list/students-list.component';
import { StudentsListItemComponent } from '@students/students-list-item/students-list-item.component';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from 'src/app/store/students/students.effects';
import { StudentsPageComponent } from '@students/students-page/students-page.component';
import { StudentsSearchComponent } from '@students/students-search/students-search.component';
import { StudentPageComponent } from '@students/student-page/student-page.component';

@NgModule({
  declarations: [
    StudentsPageComponent,
    StudentsListComponent,
    StudentsListItemComponent,
    StudentsSearchComponent,
    StudentPageComponent,
  ],
  imports: [
    CommonModule,
    StudentsRouting,
    EffectsModule.forFeature([StudentsEffects]),
    SharedModule,
  ],
})
export class StudentsModule {}
