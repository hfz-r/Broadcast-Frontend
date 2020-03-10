import {
  AUTHENTICATE,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from './constants';

export const authenticate = () => ({ type: AUTHENTICATE });

export const login = (username, password) => ({
  type: LOGIN,
  payload: { username, password },
});

export const loginLoading = () => ({ type: LOGIN_LOADING });

export const loginSuccess = () => ({ type: LOGIN_SUCCESS, payload: {} });

export const loginFailure = err => ({
  type: LOGIN_FAILURE,
  payload: { err },
});

export const logout = () => ({ type: LOGOUT });
