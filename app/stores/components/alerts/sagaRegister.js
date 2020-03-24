import { takeEvery } from 'redux-saga/effects';
import { ALERTS_SHOW } from './constants';
import * as sagas from './sagas';

export default function* alertSaga() {
  yield takeEvery(ALERTS_SHOW, sagas.handleTimer);
}
