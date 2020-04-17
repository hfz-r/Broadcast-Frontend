import produce from 'immer';
import Remote from 'utils/remote';
import * as T from './constants';

export const initialState = {
  message: Remote.NotAsked,
  messages: Remote.NotAsked,
  creating: Remote.NotAsked,
};

/* eslint-disable default-case, no-param-reassign */
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
        draft.creating = Remote.Loading;
        break;
      case T.CREATE_MESSAGE_SUCCESS:
        draft.creating = Remote.Success(action.payload);
        break;
      case T.CREATE_MESSAGE_FAILURE:
        draft.creating = Remote.Failure(action.payload);
        break;
      case T.FETCH_MESSAGE_LOADING:
        draft.message = Remote.Loading;
        break;
      case T.FETCH_MESSAGE_SUCCESS:
        draft.message = Remote.Success(action.payload);
        break;
      case T.FETCH_MESSAGE_FAILURE:
        draft.message = Remote.Failure(action.payload);
        break;
    }
  });

export default announcementReducer;
