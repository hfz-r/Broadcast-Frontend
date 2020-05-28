import { takeLatest } from 'redux-saga/effects';
import * as T from './constants';
import sagas from './sagas';

export default function* annoucementSaga({ api }) {
  const saga = sagas({ api });

  yield takeLatest(T.FETCH_MESSAGES, saga.fetchMessages);
  yield takeLatest(T.FETCH_PROJECTS, saga.fetchProjects);
  yield takeLatest(T.CREATE_MESSAGE, saga.submitMessage);
  yield takeLatest(T.CREATE_PROJECT, saga.createProject);
  yield takeLatest(T.FETCH_PROJECT, saga.getProject);
  yield takeLatest(T.EDIT_PROJECT, saga.editProject);
  yield takeLatest(T.FETCH_MESSAGE, saga.getMessage);
  yield takeLatest(T.EDIT_MESSAGE, saga.editMessage);
}
