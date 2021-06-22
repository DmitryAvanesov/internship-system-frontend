import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDictionaries } from '@store/dictionaries/dictionaries.actions';
import { loadInterviews } from '@store/interviews/interviews.actions';
import { loadPositions } from '@store/positions/positions.actions';
import { StudentModel } from '@store/students/models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.bootstrap();
  }

  private bootstrap() {
    this.store.dispatch(loadDictionaries());
    this.store.dispatch(loadInterviews());
    this.store.dispatch(loadPositions());
  }
}
