import produce from 'immer';
import { assocPath } from 'ramda';
import Remote from 'utils/remote';
import * as T from './constants';

export const initialState = {
  messages: Remote.NotAsked,
  newMessage: Remote.NotAsked,
  projects: Remote.NotAsked,
};

/* eslint-disable default-case, no-param-reassign */
/* eslint-disable consistent-return */
const announcementReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case T.FETCH_MESSAGES_LOADING:
        draft.messages = Remote.Loading;
        break;
      case T.FETCH_MESSAGES_SUCCESS:
        draft.messages = Remote.Success(action.payload);
        break;
      case T.FETCH_MESSAGES_FAILURE:
        draft.messages = Remote.Failure(action.payload);
        break;
      case T.CREATE_MESSAGE_LOADING:
        draft.newMessage = Remote.Loading;
        break;
      case T.CREATE_MESSAGE_SUCCESS:
        draft.newMessage = Remote.Success(action.payload);
        break;
      case T.CREATE_MESSAGE_FAILURE:
        draft.newMessage = Remote.Failure(action.payload);
        break;
      case T.FETCH_MESSAGE_SUCCESS: {
        return assocPath(
          [action.payload.slug],
          Remote.Success(action.payload.message),
          state,
        );
      }
      case T.FETCH_MESSAGE_FAILURE: {
        return assocPath(
          [action.payload.slug],
          Remote.Failure(action.payload.error),
          state,
        );
      }
      case T.FETCH_MESSAGE_LOADING: {
        return assocPath([action.payload.slug], Remote.Loading, state);
      }
      case T.FETCH_PROJECTS_LOADING:
        draft.projects = Remote.Loading;
        break;
      case T.FETCH_PROJECTS_SUCCESS:
        draft.projects = Remote.Success(action.payload.projects);
        break;
      case T.FETCH_PROJECTS_FAILURE:
        draft.projects = Remote.Failure(action.payload.error);
        break;
      case T.FETCH_PROJECT_SUCCESS: {
        return assocPath(
          [action.payload.project],
          Remote.Success(action.payload.result),
          state,
        );
      }
      case T.FETCH_PROJECT_FAILURE: {
        return assocPath(
          [action.payload.project],
          Remote.Failure(action.payload.error),
          state,
        );
      }
      case T.FETCH_PROJECT_LOADING: {
        return assocPath([action.payload.project], Remote.Loading, state);
      }
    }
  });

export default announcementReducer;
