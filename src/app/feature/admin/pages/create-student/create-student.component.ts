import { Component, OnInit } from '@angular/core';
import {selectAllSpecializations, selectAllTechnologies} from '@store/dictionaries/dictionaries.selectors';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent implements OnInit {
  allSpecializations$ = this.store.select(selectAllSpecializations);
  allTechnologies$ = this.store.select(selectAllTechnologies);
  constructor(private store: Store) {}

  ngOnInit() {}

}
