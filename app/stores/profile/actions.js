import * as T from './constants';

export const fetchUsers = () => ({ type: T.FETCH_USERS });
export const fetchUsersLoading = () => ({ type: T.FETCH_USERS_LOADING });
export const fetchUsersSuccess = users => ({
  type: T.FETCH_USERS_SUCCESS,
  payload: { users },
});
export const fetchUsersFailure = error => ({
  type: T.FETCH_USERS_FAILURE,
  payload: { error },
});

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

export const getUserInfo = username => ({
  type: T.GET_USER_INFO,
  payload: { username },
});
export const getUserInfoError = (username, error) => ({
  type: T.GET_USER_INFO_ERROR,
  payload: { username, error },
});
export const getUserInfoLoading = username => ({
  type: T.GET_USER_INFO_LOADING,
  payload: { username },
});
export const getUserInfoSuccess = (username, userInfo) => ({
  type: T.GET_USER_INFO_SUCCESS,
  payload: { username, userInfo },
});

export const editUserInfo = (username, user) => ({
  type: T.EDIT_USER_INFO,
  payload: { username, user },
});
export const editUserInfoError = (username, error) => ({
  type: T.EDIT_USER_INFO_ERROR,
  payload: { username, error },
});
export const editUserInfoLoading = username => ({
  type: T.EDIT_USER_INFO_LOADING,
  payload: { username },
});
export const editUserInfoSuccess = username => ({
  type: T.EDIT_USER_INFO_SUCCESS,
  payload: { username },
});

export const signIn = () => ({
  type: T.SIGN_IN,
});

export const clearSession = () => ({
  type: T.CLEAR_SESSION,
});

export const fetchRoles = () => ({ type: T.FETCH_ROLES });
export const fetchRolesLoading = () => ({ type: T.FETCH_ROLES_LOADING });
export const fetchRolesSuccess = roles => ({
  type: T.FETCH_ROLES_SUCCESS,
  payload: { roles },
});
export const fetchRolesFailure = error => ({
  type: T.FETCH_ROLES_FAILURE,
  payload: { error },
});
