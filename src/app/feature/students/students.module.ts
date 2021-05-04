import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRouting } from './students.routing';
import { SharedModule } from '@shared/shared.module';
import { StudentsListComponent } from '@students/students-list/students-list.component';
import { StudentsListItemComponent } from '@students/students-list-item/students-list-item.component';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from 'src/app/store/students/students.effects';

@NgModule({
  declarations: [StudentsListComponent, StudentsListItemComponent],
  imports: [
    CommonModule,
    StudentsRouting,
    EffectsModule.forFeature([StudentsEffects]),
    SharedModule,
  ],
})
export class StudentsModule {}
