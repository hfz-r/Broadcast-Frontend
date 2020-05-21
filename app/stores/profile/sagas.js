import {
  call,
  cancel,
  delay,
  fork,
  put,
  select,
  spawn,
} from 'redux-saga/effects';
import { applySpec, find, mergeAll, pipe, prop, values } from 'ramda';
import moment from 'moment';
import * as C from 'utils/services/AlertService';
import * as A from './actions';
import * as S from './selectors';
import * as actions from '../actions';
import * as selectors from '../selectors';

export const authRetryDelay = 5000;

let renewSessionTask = null;

export default ({ api }) => {
  const signIn = function* _() {
    try {
      yield put(A.setApiTokenLoading());
      const guid = (yield select(selectors.auth.makeSelectLogin())).getOrElse();
      renewSessionTask = yield fork(renewSession, guid, 0);
    } catch (e) {
      throw e;
    }
  };

  const renewSession = function* _(guid, renewIn = 0) {
    try {
      yield delay(renewIn);
      yield call(setSession, guid);
    } catch (e) {
      yield put(A.setApiTokenFailure(e));
      yield spawn(renewSession, guid, authRetryDelay);
    }
  };

  const setSession = function* _(guid) {
    try {
      const { token: apiToken, expiresAt } = yield call(
        api.generateSession,
        guid,
      );
      yield put(A.setApiTokenSuccess(apiToken));
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
      yield put(A.fetchUserDataSuccess(user));
      return user;
    } catch (e) {
      yield put(A.fetchUserDataFailure(e));
      throw e;
    }
  };

  const fetchUsers = function* _() {
    try {
      yield put(A.fetchUsersLoading());
      const sessionToken = (yield select(S.makeSelectApiToken())).getOrElse('');
      const users = yield call(api.fetchUsers, sessionToken);
      yield put(A.fetchUsersSuccess(users));
    } catch (e) {
      yield put(A.fetchUsersFailure(e.errors));
    }
  };

  const fetchRoles = function* _() {
    try {
      yield put(A.fetchRolesLoading());
      const sessionToken = (yield select(S.makeSelectApiToken())).getOrElse('');
      const roles = yield call(api.fetchRoles, sessionToken);
      yield put(A.fetchRolesSuccess(roles));
    } catch (e) {
      yield put(A.fetchRolesFailure(e.errors));
    }
  };

  const getUserInfo = function* _(action) {
    const { username } = action.payload;
    try {
      yield put(A.getUserInfoLoading(username));
      const { users } = (yield select(S.makeSelectUsers())).getOrElse({});
      const user = find(u => u.username === username, users);
      const initialValues = applySpec({
        userInfo: {
          email: prop('email'),
          name: prop('full_name'),
          designation: prop('designation'),
          phone: prop('phone'),
          address: prop('address'),
          verified: prop('verified'),
        },
        userRole: {
          roles: prop('roles'),
        },
      })(user);
      yield put(A.getUserInfoSuccess(username, user));
      yield put(actions.form.initialize('userMgmt', initialValues));
    } catch (e) {
      yield put(A.getUserInfoError(username, e));
      yield put(actions.alerts.displayError(C.GET_USER_INFO_ERROR));
    }
  };

  const editUserInfo = function* _(action) {
    const { username, user } = action.payload;
    try {
      yield put(A.editUserInfoLoading(username));
      const sessionToken = (yield select(S.makeSelectApiToken())).getOrElse('');
      const transform = pipe(
        values,
        mergeAll,
      );
      yield call(api.editUser, transform(user), username, sessionToken);
      yield call(fetchUsers);
      yield put(A.getUserInfo(username));
      yield put(A.editUserInfoSuccess(username));
      yield put(actions.alerts.displaySuccess(C.UPDATE_USER_INFO_SUCCESS));
    } catch (e) {
      yield put(A.getUserInfoError(username, e));
      yield put(actions.alerts.displayError(C.UPDATE_USER_INFO_ERROR));
    }
  };

  const clearSession = function* _() {
    if (renewSessionTask) {
      yield cancel(renewSessionTask);
      renewSessionTask = null;
    }
    yield put(A.setApiTokenNotAsked());
  };

  return {
    clearSession,
    fetchUser,
    fetchUsers,
    fetchRoles,
    getUserInfo,
    editUserInfo,
    renewSession,
    setSession,
    signIn,
  };
};
