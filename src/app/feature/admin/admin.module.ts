import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin.routing';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@admin/pages/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from '@store/students/students.effects';
import { TechnologiesListComponent } from '@admin/pages/technologies-list/technologies-list.component';
import { DictionaryFormComponent } from '@admin/components/dictionary-form/dictionary-form.component';
import { SpecializationsListComponent } from '@admin/pages/specializations-list/specializations-list.component';
import { CreateStudentComponent } from '@admin/pages/create-student/create-student.component';
import { EditStudentComponent } from '@admin/pages/edit-student/edit-student.component';
import { CreateCompanyComponent } from '@admin/pages/create-company/create-company.component';
import { EditCompanyComponent } from '@admin/pages/edit-company/edit-company.component';
import { CompaniesEffects } from '@store/companies/companies.effects';

@NgModule({
  declarations: [
    HomeComponent,
    TechnologiesListComponent,
    DictionaryFormComponent,
    SpecializationsListComponent,
    CreateStudentComponent,
    EditStudentComponent,
    CreateCompanyComponent,
    EditCompanyComponent,
  ],
  imports: [
    CommonModule,
    AdminRouting,
    EffectsModule.forFeature([StudentsEffects, CompaniesEffects]),
    SharedModule,
  ],
})
export class AdminModule {}
