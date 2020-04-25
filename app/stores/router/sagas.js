import { put } from 'redux-saga/effects';
import * as actions from '../actions';

export default () => {
  const changeLocation = function* _({ payload }) {
    try {
      const { location, action } = payload;
      yield put(actions.modals.closeAllModals());
      if (action === 'POP' && location.pathname === '/login') {
        yield put(actions.auth.logout());
      }
    } catch (e) {
      throw e;
    }
  };

  return {
    changeLocation,
  };
};
