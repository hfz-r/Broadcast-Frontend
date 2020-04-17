import { call, put, select } from 'redux-saga/effects';
import { assoc } from 'ramda';
import * as C from 'utils/services/AlertService';
import * as A from './actions';
import * as actions from '../actions';
import * as selectors from '../selectors';

export default ({ api }) => {
  const fetchMessages = function* _() {
    try {
      yield put(A.fetchMessagesLoading());
      const messages = yield call(api.fetchMessages);
      yield put(A.fetchMessagesSuccess(messages));
    } catch (e) {
      yield put(A.fetchMessagesFailure(e));
    }
  };

  const submitMessage = function* _(action) {
    try {
      yield put(A.createMessageLoading());
      // get current session
      const session = yield select(selectors.auth.makeSelectSession());
      const payload = {
        message: assoc('author', session, action.payload.message),
      };
      // execute api
      yield call(api.createMessage, payload);
      // push result
      yield put(A.createMessageSuccess());
      yield put(actions.alerts.displaySuccess(C.CREATE_ANNOUNCEMENT_SUCCESS));
      yield put(actions.form.reset('createProject'));
    } catch (e) {
      yield put(A.createMessagesFailure(e.errors));
      yield put(actions.alerts.displayError(C.CREATE_ANNOUNCEMENT_ERROR));
    }
  };

  const fetchMessage = function* _(action) {
    try {
      yield put(A.fetchMessageLoading());
      const message = yield call(api.fetchMessage, action.payload);
      yield put(A.fetchMessageSuccess(message));
    } catch (e) {
      yield put(A.fetchMessageFailure(e));
    }
  };

  return { fetchMessages, submitMessage, fetchMessage };
};
