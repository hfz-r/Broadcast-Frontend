import { takeLatest } from 'redux-saga/effects';
import * as T from './constants';
import sagas from './sagas';

export default function* authSaga({ api }) {
  const saga = sagas({ api });

  yield takeLatest(T.LOGIN, saga.login);
  yield takeLatest(T.LOGOUT, saga.logout);
  yield takeLatest(T.DEAUTHORIZE_BROWSER, saga.deauthorizeBrowser);
  yield takeLatest(T.LOGOUT_CLEAR_REDUX_STORE, saga.logoutClearReduxStore);
}
