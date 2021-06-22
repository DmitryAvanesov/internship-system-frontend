import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '@store/root.reducer';
import { AuthState } from '@store/auth/auth.state';

const selectAuthState = createFeatureSelector<AppState, AuthState>('auth');

export const selectUserRoles = createSelector(
  selectAuthState,
  (state) => state.roles
);

export const isUserLoggedIn = createSelector(
  selectAuthState,
  (state) => state.isLoggedIn
);
export const selectUserId = createSelector(
  selectAuthState,
  (state) => state.id
);
