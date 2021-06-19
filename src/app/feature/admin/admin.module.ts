import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRouting} from './admin.routing';
import {SharedModule} from '@shared/shared.module';
import {HomeComponent} from '@admin/pages/home/home.component';
import {EffectsModule} from '@ngrx/effects';
import {StudentsEffects} from '@store/students/students.effects';
import {TechnologiesListComponent} from '@admin/pages/technologies-list/technologies-list.component';
import {DictionaryFormComponent} from '@admin/components/dictionary-form/dictionary-form.component';
import {SpecializationsListComponent} from '@admin/pages/specializations-list/specializations-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    TechnologiesListComponent,
    DictionaryFormComponent,
    SpecializationsListComponent,
  ],
  imports: [
    CommonModule,
    AdminRouting,
    EffectsModule.forFeature([StudentsEffects]),
    SharedModule,
  ]
})
export class AdminModule { }
