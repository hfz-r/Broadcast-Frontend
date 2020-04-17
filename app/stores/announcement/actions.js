import * as T from './constants';

export const fetchMessages = () => ({ type: T.FETCH_MESSAGES });

export const fetchMessagesLoading = () => ({ type: T.FETCH_MESSAGES_LOADING });

export const fetchMessagesSuccess = messages => ({
  type: T.FETCH_MESSAGES_SUCCESS,
  payload: messages,
});

export const fetchMessagesFailure = error => ({
  type: T.FETCH_MESSAGES_FAILURE,
  payload: error,
});

export const createMessage = message => ({
  type: T.CREATE_MESSAGE,
  payload: { message },
});

export const createMessageLoading = () => ({ type: T.CREATE_MESSAGE_LOADING });

export const createMessageSuccess = () => ({
  type: T.CREATE_MESSAGE_SUCCESS,
  payload: {},
});

export const createMessagesFailure = error => ({
  type: T.CREATE_MESSAGE_FAILURE,
  payload: { error },
});

export const fetchMessage = slug => ({
  type: T.FETCH_MESSAGE,
  payload: { slug },
});

export const fetchMessageLoading = () => ({ type: T.FETCH_MESSAGE_LOADING });

export const fetchMessageSuccess = message => ({
  type: T.FETCH_MESSAGE_SUCCESS,
  payload: message,
});

export const fetchMessageFailure = error => ({
  type: T.FETCH_MESSAGE_FAILURE,
  payload: error,
});
