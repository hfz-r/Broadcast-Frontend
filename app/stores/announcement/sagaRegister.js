import { takeLatest } from 'redux-saga/effects';
import { FETCH_MESSAGES, CREATE_MESSAGE } from './constants';
import sagas from './sagas';

export default function* annoucementSaga({ api }) {
  const saga = sagas({ api });

  yield takeLatest(FETCH_MESSAGES, saga.fetchMessages);
  yield takeLatest(CREATE_MESSAGE, saga.submitMessage);
}
