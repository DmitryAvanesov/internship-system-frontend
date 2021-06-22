import { Component, OnInit } from '@angular/core';
import { selectAllInterviews } from '@store/interviews/interviews.selectors';
import { selectAllPositions } from '@store/positions/positions.selectors';
import { selectAllStudents } from '@store/students/students.selectors';
import { combineLatest, Observable } from 'rxjs';
import { CompanyModel } from '@store/companies/models/company.model';
import { selectRouteParam } from '@store/router/router.selectors';
import { MockSpecialization } from '@companies/pages/company/company.component';
import { StudentModel } from '@store/students/models/student.model';
import { InterviewModel } from '@store/interviews/models/interview.model';
import { PositionModel } from '@store/positions/models/position.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadStudents } from '@store/students/students.actions';
import {
  changeCompany,
  loadCompanies,
} from '@store/companies/companies.actions';
import { selectCompany } from '@store/companies/companies.selectors';
import { filter } from 'rxjs/operators';
import { interviewChanged } from '@store/interviews/interviews.actions';
import { selectUserId } from '@store/auth/auth.selectors';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.scss'],
})
export class CompanyAccountComponent implements OnInit {
  interviews$ = this.store.select(selectAllInterviews);
  positions$ = this.store.select(selectAllPositions);
  students$ = this.store.select(selectAllStudents);
  company$: Observable<CompanyModel>;
  id$ = this.store.select(selectUserId);

  specializations: MockSpecialization[] = [
    {
      id: '1',
      name: 'Specialization 1',
      isOpen: true,
    },
    {
      id: '2',
      name: 'Specialization 2',
      isOpen: false,
    },
  ];
  students: StudentModel[] = [
    {
      id: '1',
      userName: 'Ivan',
      score: Math.round(Math.random() * 500) / 100,
      interviews: [],
      subjectAssessments: [],
    },
    {
      id: '2',
      userName: 'Ivan',
      score: Math.round(Math.random() * 500) / 100,
      interviews: [],
      subjectAssessments: [],
    },
    {
      id: '3',
      userName: 'Ivan',
      score: Math.round(Math.random() * 500) / 100,
      interviews: [],
      subjectAssessments: [],
    },
  ];

  company: CompanyModel;
  interviews: InterviewModel[];
  interviewStudents: { [id: string]: StudentModel };
  interviewPositions: { [id: string]: PositionModel };
  interviewDates: { [id: string]: string } = {};

  form = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    info: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
    this.store.dispatch(loadCompanies());

    this.id$.subscribe((id) => {
      this.company$ = this.store.select(selectCompany, { id });
    });

    this.company$.pipe(filter((el) => !!el)).subscribe((company) => {
      this.company = company;
      this.form.controls.userName.setValue(company.userName);
      this.form.controls.info.setValue(company?.info);
      this.form.controls.email.setValue(company?.email);

      combineLatest([
        this.interviews$,
        this.positions$,
        this.students$,
      ]).subscribe(([interviews, positions, students]) => {
        this.interviews =
          interviews.length && positions.length
            ? interviews.filter(
                (interview) =>
                  positions.find(
                    (position) => position.id === interview.positionId
                  ).companyId === this.company.id
              )
            : [];

        this.interviewPositions = {};
        this.interviewStudents = {};

        for (const interview of this.interviews) {
          this.interviewPositions[interview.id] = positions.find(
            (position) => position.id === interview.positionId
          );
          this.interviewStudents[interview.id] = students.find(
            (student) => student.id === interview.studentId
          );
        }
      });
    });
  }

  save(): void {
    const newCompany: CompanyModel = { ...this.company, ...this.form.value };
    this.store.dispatch(changeCompany({ company: newCompany }));
  }

  handleChangeDate(event: any, interviewId: string): void {
    this.interviewDates[interviewId] = event.detail.value;
  }

  handleChangeInterviewState(interview: InterviewModel): void {
    if (interview.state === 0) {
      this.store.dispatch(
        interviewChanged({
          interview: {
            ...interview,
            date: this.interviewDates[interview.id],
            state: 1,
          },
        })
      );
    } else if (interview.state === 1) {
      this.store.dispatch(
        interviewChanged({
          interview: { ...interview, state: 2 },
        })
      );
    }
  }
}
