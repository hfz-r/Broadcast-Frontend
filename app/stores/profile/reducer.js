import produce from 'immer';
import { mergeRight } from 'ramda';
import Remote from 'utils/remote';
import * as T from './constants';

export const initialState = {
  apiToken: Remote.NotAsked,
  userData: Remote.NotAsked,
};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case T.FETCH_USER_DATA_SUCCESS:
        draft.userData = Remote.Success(
          mergeRight(draft.userData.getOrElse({}), action.payload.userData),
        );
        break;
      case T.FETCH_USER_DATA_LOADING:
        draft.userData = Remote.Loading;
        break;
      case T.FETCH_USER_DATA_FAILURE:
        draft.userData = Remote.Failure(action.payload.error);
        break;
      case T.SET_API_TOKEN_NOT_ASKED:
        draft.apiToken = Remote.NotAsked;
        break;
      case T.SET_API_TOKEN_SUCCESS:
        draft.apiToken = Remote.Success(action.payload.token);
        break;
      case T.SET_API_TOKEN_LOADING:
        draft.apiToken = Remote.Loading;
        break;
      case T.SET_API_TOKEN_FAILURE:
        draft.apiToken = Remote.Failure(action.payload.error);
        break;
    }
  });

export default profileReducer;
