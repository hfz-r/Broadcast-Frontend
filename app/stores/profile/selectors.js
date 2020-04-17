import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProfile = state => state.profile || initialState;

const makeSelectUserData = () =>
  createSelector(
    selectProfile,
    profileState => profileState.userData,
  );

const makeSelectApiToken = () =>
  createSelector(
    selectProfile,
    profileState => profileState.apiToken,
  );

export { selectProfile, makeSelectUserData, makeSelectApiToken };
