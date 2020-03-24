import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuth = state => state.auth || initialState;

const makeSelectAuthenticated = () =>
  createSelector(
    selectAuth,
    authState => authState.isAuthenticated,
  );

const makeSelectLogin = () =>
  createSelector(
    selectAuth,
    authState => authState.login,
  );

const makeSelectSession = () =>
  createSelector(
    selectAuth,
    authState => authState.userSession,
  );

export {
  selectAuth,
  makeSelectAuthenticated,
  makeSelectLogin,
  makeSelectSession,
};
