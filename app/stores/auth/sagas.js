import { call, cancel, delay, fork, put, spawn } from 'redux-saga/effects';
import moment from 'moment';
import * as C from 'utils/services/AlertService';
import * as A from './actions';
import * as actions from '../actions';

export const authRetryDelay = 5000;

let renewSessionTask = null;

export default ({ api }) => {
  const login = function* _(action) {
    const { username, password } = action.payload;
    try {
      yield put(A.loginLoading());
      const guid = yield call(api.login, username, password);
      yield put(A.loginSuccess(guid));
      yield put(actions.profile.setApiTokenLoading());
      renewSessionTask = yield fork(renewSession, guid, 0);
      yield put(A.authenticate());
      yield put(actions.router.push('/home'));
      yield put(actions.form.destroy('login'));
    } catch (e) {
      yield put(A.loginFailure(e.errors));
      yield put(actions.alerts.displayError(C.LOGIN_ERROR));
    }
  };

  const renewSession = function* _(guid, renewIn = 0) {
    try {
      yield delay(renewIn);
      yield call(setSession, guid);
    } catch (e) {
      yield put(actions.profile.setApiTokenFailure(e));
      yield spawn(renewSession, guid, authRetryDelay);
    }
  };

  const setSession = function* _(guid) {
    try {
      const { token: apiToken, expiresAt } = yield call(
        api.generateSession,
        guid,
      );
      yield put(actions.profile.setApiTokenSuccess(apiToken));
      yield call(fetchUser, apiToken);
      const expiresIn = moment(expiresAt)
        .subtract(5, 's')
        .diff(moment());
      yield spawn(renewSession, guid, expiresIn);
    } catch (e) {
      throw e;
    }
  };

  const fetchUser = function* _(sessionToken) {
    try {
      const { user } = yield call(api.currentUser, sessionToken);
      yield put(actions.profile.fetchUserDataSuccess(user));
      return user;
    } catch (e) {
      yield put(actions.profile.fetchUserDataFailure(e));
      throw e;
    }
  };

  const clearSession = function* _() {
    if (renewSessionTask) {
      yield cancel(renewSessionTask);
      renewSessionTask = null;
    }
    yield put(actions.profile.setApiTokenNotAsked());
  };

  return { login, renewSession, setSession, fetchUser, clearSession };
};
