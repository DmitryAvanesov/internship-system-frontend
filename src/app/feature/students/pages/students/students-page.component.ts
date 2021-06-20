import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadStudents } from 'src/app/store/students/students.actions';
import {
  selectAllStudents,
  selectStudentsLoading,
} from 'src/app/store/students/students.selectors';
import {StudentModel} from '@store/students/models/student.model';
import {DictionaryElementModel} from '@store/dictionaries/models/dictionary-element.model';
import {selectAllSpecializationEntities, selectAllSpecializations} from '@store/dictionaries/dictionaries.selectors';
import {combineLatest} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  students$ = this.store.select(selectAllStudents);
  studentsLoading$ = this.store.select(selectStudentsLoading);
  specializations$ = this.store.select(selectAllSpecializationEntities);

  students: (StudentModel & {specializationNames: string[]})[] = [];

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadStudents());

    combineLatest([this.students$, this.specializations$])
      .pipe(filter(([students, specializations]) =>
        !!students && !!students.length
      ))
      .subscribe(([students, specializations]) => {
        this.students = students.map((student) => ({
          ...student,
          specializationNames: student.specializations.map((spec) => specializations[spec].name)
        }));
      })

  }
}
