import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAllSpecializations,
  selectAllTechnologies,
} from '@store/dictionaries/dictionaries.selectors';
import { selectUserId } from '@store/auth/auth.selectors';
import {
  selectAllStudents,
  selectStudent,
  selectStudentEntities,
} from '@store/students/students.selectors';
import { changeStudent, loadStudents } from '@store/students/students.actions';
import { combineLatest, Observable } from 'rxjs';
import { StudentModel } from '@store/students/models/student.model';
import { filter } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { selectInterviewByStudent } from '@store/interviews/interviews.selectors';
import { InterviewModel } from '@store/interviews/models/interview.model';
import { selectPosition } from '@store/positions/positions.selectors';
import { PositionModel } from '@store/positions/models/position.model';
import { selectCompany } from '@store/companies/companies.selectors';
import { CompanyModel } from '@store/companies/models/company.model';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.scss'],
})
export class StudentAccountComponent implements OnInit {
  allSpecializations$ = this.store.select(selectAllSpecializations);
  allTechnologies$ = this.store.select(selectAllTechnologies);
  students$ = this.store.select(selectStudentEntities);
  id$ = this.store.select(selectUserId);
  interviewCompanies: { [id: string]: CompanyModel };
  interviewPositions: { [id: string]: PositionModel };
  interviews$: Observable<InterviewModel[]>;

  student$: Observable<StudentModel>;
  studentModel: StudentModel;

  form = new FormGroup({
    info: new FormControl(''),
    specializations: new FormControl([]),
    technologies: new FormControl([]),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadStudents());

    combineLatest([this.id$, this.students$])
      // .pipe(filter(([id, students]) => !!id && !!Object.keys(students).length))
      .subscribe(([id, students]) => {
        this.student$ = this.store.select(selectStudent, { id });
      });

    this.student$?.pipe(filter((student) => !!student)).subscribe((student) => {
      this.studentModel = student;
      this.form.controls.info?.setValue(student.info);
      this.form.controls.specializations?.setValue(student.specializations);
      this.form.controls.technologies?.setValue(student.technologies);

      this.interviews$ = this.store.select(selectInterviewByStudent, {
        studentId: this.studentModel.id,
      }) as Observable<InterviewModel[]>;

      this.interviewCompanies = {};
      this.interviewPositions = {};

      this.interviews$.subscribe((interviews) => {
        for (const interview of interviews) {
          this.store
            .select(selectPosition, { id: interview.positionId })
            .subscribe((position: PositionModel) => {
              this.interviewPositions[interview.id] = position;

              this.store
                .select(selectCompany, { id: position.companyId })
                .subscribe((company: CompanyModel) => {
                  this.interviewCompanies[interview.id] = company;
                });
            });
        }
      });
    });
  }

  save(): void {
    const newStudent: StudentModel = {
      ...this.studentModel,
      ...this.form.value,
    };
    debugger;
    this.store.dispatch(changeStudent({ newStudent }));
    // this.store.dispatch(changeStudent({newStudent: }))
  }
}
