import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadInterviews } from '@store/interviews/interviews.actions';
import { selectAllInterviews } from '@store/interviews/interviews.selectors';
import { StudentModel } from '@store/students/models/student.model';

interface MockSpecialization {
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
    },
    {
      id: '2',
      userName: 'Ivan',
      score: Math.round(Math.random() * 500) / 100,
      interviews: [],
    },
    {
      id: '3',
      userName: 'Ivan',
      score: Math.round(Math.random() * 500) / 100,
      interviews: [],
    },
  ];
  interviews$ = this.store.select(selectAllInterviews);

  constructor(private store: Store) {}

  ngOnInit() {}

  toggleSpecialization(id: string) {
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
}
