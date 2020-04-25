import { takeLatest } from 'redux-saga/effects';
import sagas from './sagas';

export default function* routerSaga() {
  const saga = sagas();

  yield takeLatest('@@router/LOCATION_CHANGE', saga.changeLocation);
}
