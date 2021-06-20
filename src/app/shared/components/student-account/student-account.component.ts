import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAllSpecializations,
  selectAllTechnologies,
} from '@store/dictionaries/dictionaries.selectors';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.scss'],
})
export class StudentAccountComponent {
  allSpecializations$ = this.store.select(selectAllSpecializations);
  allTechnologies$ = this.store.select(selectAllTechnologies);

  constructor(private store: Store) {}
}
