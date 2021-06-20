import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectAllSpecializations, selectAllTechnologies} from '@store/dictionaries/dictionaries.selectors';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.scss'],
})
export class StudentAccountComponent implements OnInit {
  allSpecializations$ = this.store.select(selectAllSpecializations);
  allTechnologies$ = this.store.select(selectAllTechnologies);
  constructor(private store: Store) {}

  ngOnInit() {}
}
