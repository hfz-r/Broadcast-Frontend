import produce from 'immer';
import Remote from 'utils/remote';
import * as T from './constants';

export const initialState = {
  isLoggingIn: false,
  isAuthenticated: false,
  login: Remote.NotAsked,
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case T.LOGIN:
        draft.isLoggingIn = true;
        break;
      case T.LOGIN_LOADING:
        draft.login = Remote.Loading;
        break;
      case T.LOGIN_SUCCESS:
        draft.login = Remote.Success(action.payload);
        break;
      case T.LOGIN_FAILURE:
        draft.login = Remote.Failure(action.payload);
        break;
      case T.AUTHENTICATE:
        draft.isAuthenticated = true;
        break;
    }
  });

export default authReducer;
