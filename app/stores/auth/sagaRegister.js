import { takeLatest } from 'redux-saga/effects';
import * as T from './constants';
import * as constants from '../actionTypes';
import sagas from './sagas';

export default function* authSaga({ api }) {
  const saga = sagas({ api });

  yield takeLatest(T.LOGIN, saga.login);
  yield takeLatest(constants.profile.FETCH_USER, saga.fetchUser);
  yield takeLatest(constants.profile.CLEAR_SESSION, saga.clearSession);
}
