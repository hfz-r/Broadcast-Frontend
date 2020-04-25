import * as T from './constants';

export const fetchMessages = sessionToken => ({
  type: T.FETCH_MESSAGES,
  payload: sessionToken,
});

export const fetchMessagesLoading = () => ({ type: T.FETCH_MESSAGES_LOADING });

export const fetchMessagesSuccess = messages => ({
  type: T.FETCH_MESSAGES_SUCCESS,
  payload: messages,
});

export const fetchMessagesFailure = error => ({
  type: T.FETCH_MESSAGES_FAILURE,
  payload: error,
});

export const createMessage = (message, sessionToken) => ({
  type: T.CREATE_MESSAGE,
  payload: { message, sessionToken },
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

export const fetchMessage = (slug, sessionToken) => ({
  type: T.FETCH_MESSAGE,
  payload: { slug, sessionToken },
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
