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
import { StudentChipsComponent } from '@students/components/student-chips/student-chips.component';
import { StudentScoreComponent } from '@students/components/student-score/student-score.component';
import { StudentPriorityListComponent } from '@students/components/student-priority-list/student-priority-list.component';
import { StudentPriorityListItemComponent } from '@students/components/student-priority-list-item/student-priority-list-item.component';

@NgModule({
  declarations: [
    StudentsPageComponent,
    StudentsListComponent,
    StudentsListItemComponent,
    StudentsSearchComponent,
    StudentPageComponent,
    StudentChipsComponent,
    StudentScoreComponent,
    StudentPriorityListComponent,
    StudentPriorityListItemComponent,
  ],
  imports: [CommonModule, StudentsRouting, SharedModule],
})
export class StudentsModule {}
