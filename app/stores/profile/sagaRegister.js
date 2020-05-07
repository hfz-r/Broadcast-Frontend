import { takeLatest } from 'redux-saga/effects';
import * as T from './constants';
import sagas from './sagas';

export default function* profileSaga({ api }) {
  const saga = sagas({ api });

  yield takeLatest(T.SIGN_IN, saga.signIn);
  yield takeLatest(T.FETCH_USER, saga.fetchUser);
  yield takeLatest(T.FETCH_USERS, saga.fetchUsers);
  yield takeLatest(T.FETCH_ROLES, saga.fetchRoles);
  yield takeLatest(T.GET_USER_INFO, saga.getUserInfo);
  yield takeLatest(T.EDIT_USER_INFO, saga.editUserInfo);
  yield takeLatest(T.CLEAR_SESSION, saga.clearSession);
}
