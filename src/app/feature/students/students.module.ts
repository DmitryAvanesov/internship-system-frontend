import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRouting } from './students.routing';
import { SharedModule } from '@shared/shared.module';
import { StudentsListItemComponent } from '@students/components/students-list-item/students-list-item.component';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from 'src/app/store/students/students.effects';
import { StudentsPageComponent } from '@students/pages/students/students-page.component';
import { StudentPageComponent } from '@students/pages/student/student-page.component';
import { StudentsSearchComponent } from '@students/components/students-search/students-search.component';
import { StudentsListComponent } from '@students/components/students-list/students-list.component';

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
