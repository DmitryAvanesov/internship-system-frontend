import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDictionaries } from '@store/dictionaries/dictionaries.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.bootstrap();
  }

  private bootstrap() {
    this.store.dispatch(loadDictionaries());
  }
}
