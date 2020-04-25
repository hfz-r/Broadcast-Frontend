import { createSelector } from 'reselect';
import { path } from 'ramda';
import { initialState } from './reducer';

const selectProfile = state => state.profile || initialState;

const makeSelectUserData = () =>
  createSelector(
    selectProfile,
    profileState => profileState.userData,
  );

const makeSelectUsers = () =>
  createSelector(
    selectProfile,
    profileState => profileState.users,
  );

const makeSelectUserCount = () =>
  createSelector(
    selectProfile,
    profileState => profileState.users.map(path(['userCount'])).getOrElse(0),
  );

const makeSelectApiToken = () =>
  createSelector(
    selectProfile,
    profileState => profileState.apiToken,
  );

const getUserInfo = (state, username) => path([username], selectProfile(state));

export {
  selectProfile,
  makeSelectUserData,
  makeSelectUsers,
  makeSelectUserCount,
  makeSelectApiToken,
  getUserInfo,
};
