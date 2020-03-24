import { delay, put } from 'redux-saga/effects';
import * as A from './actions';

export const handleTimer = function* _(action) {
  const { id, persist, timeout } = action.payload;
  const DISMISS_ALERT = timeout || 7000;

  if (persist) return;

  yield delay(DISMISS_ALERT);
  yield put(A.dismissAlert(id));
};
