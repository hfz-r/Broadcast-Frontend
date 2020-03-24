import produce from 'immer';

import {
  AUTHENTICATE,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from './constants';

export const initialState = {
  isAuthenticated: false,
  isLoggingIn: false,
  login: [],
  userSession: {
    username: 'hfz-r',
    first_name: 'Hafiz',
    last_name: 'R',
    email: 'admin@brdcst.io',
    image: 'https://api.adorable.io/avatars/200/hafiz@adorable.io.png',
    bio: 'Admin',
    role: 'ADMIN', // ['GUEST', 'USER', 'ADMIN']
  },
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.isLoggingIn = true;
        break;
      case LOGIN_LOADING:
        draft.login = [];
        break;
      case LOGIN_SUCCESS:
        draft.login = action.payload;
        break;
      case LOGIN_FAILURE:
        draft.login = action.payload;
        break;
      case AUTHENTICATE:
        draft.isAuthenticated = true;
        break;
    }
  });

export default authReducer;
