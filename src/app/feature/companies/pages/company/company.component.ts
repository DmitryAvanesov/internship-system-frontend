import { Component, OnInit } from '@angular/core';
import { InterviewsApiService } from '@core/services/interviews-api.service';
import { PositionsApiService } from '@core/services/positions-api.service';
import { interviewAdded } from '@store/interviews/interviews.actions';
import { selectInterviewByStudentAndPosition } from '@store/interviews/interviews.selectors';
import { PositionModel } from '@store/positions/models/position.model';
import { StudentModel } from '@store/students/models/student.model';
import { Observable, of } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadCompanies } from '@store/companies/companies.actions';
import { loadStudents } from '@store/students/students.actions';
import { CompanyModel } from '@store/companies/models/company.model';
import { selectRouteParam } from '@store/router/router.selectors';
import { selectCompany } from '@store/companies/companies.selectors';
import { selectUserRoles, selectUserId } from '@store/auth/auth.selectors';
import { RolesEnum } from '@core/enums/roles.enum';

export interface MockSpecialization {
  id: string;
  name: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  routeId$ = this.store.select(selectRouteParam('id'));
  userId$ = this.store.select(selectUserId);
  company$: Observable<CompanyModel>;
  positions: PositionModel[];
  positionId: string = null;
  interview$ = of(undefined);

  userRoles$ = this.store.select(selectUserRoles);
  adminRole = RolesEnum.Admin;
  userId: string;

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

  constructor(
    private store: Store,
    private positionsApiService: PositionsApiService,
    private interviewsApiService: InterviewsApiService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadCompanies());
    this.store.dispatch(loadStudents());

    this.routeId$.subscribe((id) => {
      this.company$ = this.store.select(selectCompany, { id });
    });

    this.company$
      .pipe(skipWhile((company) => !company))
      .subscribe((company) => {
        this.positions = [];

        for (const id of company.positions) {
          this.positionsApiService.getPositionById(id).subscribe((position) => {
            this.positions = [...this.positions, position];
          });
        }
      });

    this.userId$.subscribe((userId) => {
      this.userId = userId;
    });
  }

  toggleSpecialization(id: string): void {
    const specializationIndex = this.specializations.findIndex(
      (el) => el.id === id
    );
    if (specializationIndex !== -1) {
      const newSpecializations = [...this.specializations];
      newSpecializations[specializationIndex] = {
        ...newSpecializations[specializationIndex],
        isOpen: !newSpecializations[specializationIndex].isOpen,
      };
      this.specializations = newSpecializations;
    }
  }

  handlePositionChange(event: any): void {
    this.positionId = event.detail.value;

    this.interview$ = this.store.select(selectInterviewByStudentAndPosition, {
      studentId: this.userId,
      positionId: this.positionId,
    });
  }

  handleInterviewButtonClick(): void {
    this.store.dispatch(
      interviewAdded({
        interview: {
          state: 0,
          studentId: this.userId,
          positionId: this.positionId,
        },
      })
    );
  }
}
