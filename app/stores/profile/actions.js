import * as T from './constants';

export const fetchUserDataSuccess = userData => ({
  type: T.FETCH_USER_DATA_SUCCESS,
  payload: { userData },
});

export const fetchUserDataLoading = () => ({
  type: T.FETCH_USER_DATA_LOADING,
});

export const fetchUserDataFailure = error => ({
  type: T.FETCH_USER_DATA_FAILURE,
  payload: { error },
});

export const fetchUser = () => ({
  type: T.FETCH_USER,
});

export const setApiTokenNotAsked = () => ({
  type: T.SET_API_TOKEN_NOT_ASKED,
});

export const setApiTokenSuccess = token => ({
  type: T.SET_API_TOKEN_SUCCESS,
  payload: { token },
});

export const setApiTokenLoading = () => ({
  type: T.SET_API_TOKEN_LOADING,
});

export const setApiTokenFailure = error => ({
  type: T.SET_API_TOKEN_FAILURE,
  payload: { error },
});

export const clearSession = () => ({
  type: T.CLEAR_SESSION,
});
