import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDictionaries } from '@store/dictionaries/dictionaries.actions';
import { loadInterviews } from '@store/interviews/interviews.actions';
import { StudentModel } from '@store/students/models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  // the current user goes here
  user: StudentModel = {
    id: '6c18dea8-ac7f-4a5c-b667-ed124f6a2b78',
    userName: 'Ivan',
    score: Math.round(Math.random() * 500) / 100,
    interviews: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'],
  };

  constructor(private store: Store) {}

  ngOnInit() {
    this.bootstrap();
  }

  private bootstrap() {
    this.store.dispatch(loadDictionaries());
    this.store.dispatch(loadInterviews({ id: this.user.id }));
  }
}
