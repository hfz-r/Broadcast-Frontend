import { call, put, select } from 'redux-saga/effects';
import * as C from 'utils/services/AlertService';
import * as A from './actions';
import * as actions from '../actions';
import * as selectors from '../selectors';

export default ({ api }) => {
  const login = function* _(action) {
    const { username, password } = action.payload;
    try {
      yield put(A.loginLoading());
      const guid = yield call(api.login, username, password);
      yield put(A.loginSuccess(guid));
      yield put(A.authenticate());
      yield put(actions.router.push('/home'));
      yield put(actions.profile.signIn());
      yield put(A.startLogoutTimer());
      yield put(actions.form.destroy('login'));
    } catch (e) {
      yield put(A.loginFailure(e.errors));
      yield put(actions.alerts.displayError(C.LOGIN_ERROR));
    }
  };

  const logout = function* _() {
    yield put(actions.profile.clearSession());
    yield logoutClearReduxStore();
  };

  const deauthorizeBrowser = function* _() {
    try {
      const sessionToken = (yield select(
        selectors.profile.makeSelectApiToken(),
      )).getOrElse('');
      yield call(api.deauthorizeBrowser, sessionToken);
      yield put(actions.alerts.displaySuccess(C.DEAUTHORIZE_BROWSER_SUCCESS));
    } catch (e) {
      yield put(actions.alerts.displayError(C.DEAUTHORIZE_BROWSER_ERROR));
    } finally {
      yield logoutClearReduxStore();
    }
  };

  const logoutClearReduxStore = function* _() {
    // router will fallback to /login route
    yield window.history.pushState('', '', '/');
    yield window.location.reload(true);
  };

  return {
    login,
    logout,
    deauthorizeBrowser,
    logoutClearReduxStore,
  };
};
