import * as T from './constants';

export const authenticate = () => ({ type: T.AUTHENTICATE });

export const deauthorizeBrowser = () => ({ type: T.DEAUTHORIZE_BROWSER });

export const login = (username, password) => ({
  type: T.LOGIN,
  payload: { username, password },
});
export const loginLoading = () => ({ type: T.LOGIN_LOADING });
export const loginSuccess = guid => ({
  type: T.LOGIN_SUCCESS,
  payload: guid,
});
export const loginFailure = error => ({
  type: T.LOGIN_FAILURE,
  payload: { error },
});

export const logout = () => ({ type: T.LOGOUT });
export const logoutClearReduxStore = () => ({
  type: T.LOGOUT_CLEAR_REDUX_STORE,
});
export const startLogoutTimer = () => ({ type: T.START_LOGOUT_TIMER });
