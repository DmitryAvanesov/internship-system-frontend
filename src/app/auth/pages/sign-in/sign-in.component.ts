import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {signIn} from '@store/auth/auth.actions';
import {selectIsSignInLoading} from '@store/auth/auth.selectors';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  loading$ = this.store.select(selectIsSignInLoading);
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private store: Store) { }

  ngOnInit() {
  }

  signIn() {
    this.store.dispatch(signIn(this.form.value));
  }
}
