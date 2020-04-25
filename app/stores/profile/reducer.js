import produce from 'immer';
import { assocPath, mergeRight } from 'ramda';
import Remote from 'utils/remote';
import * as T from './constants';

export const initialState = {
  apiToken: Remote.NotAsked,
  userData: Remote.NotAsked,
  users: Remote.NotAsked,
};

/* eslint-disable default-case, no-param-reassign */
/* eslint-disable consistent-return */
const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case T.FETCH_USERS_LOADING:
        draft.users = Remote.Loading;
        break;
      case T.FETCH_USERS_SUCCESS:
        draft.users = Remote.Success(action.payload.users);
        break;
      case T.FETCH_USERS_FAILURE:
        draft.users = Remote.Failure(action.payload.error);
        break;
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
      case T.GET_USER_INFO_SUCCESS: {
        return assocPath(
          [action.payload.username],
          Remote.Success(action.payload.userInfo),
          state,
        );
      }
      case T.GET_USER_INFO_ERROR: {
        return assocPath(
          [action.payload.username],
          Remote.Failure(action.payload.error),
          state,
        );
      }
      case T.GET_USER_INFO_LOADING: {
        return assocPath([action.payload.username], Remote.Loading, state);
      }
    }
  });

export default profileReducer;
