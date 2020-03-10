import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPreferences = state => state.preferences || initialState;

const makeSelectLocale = () =>
  createSelector(
    selectPreferences,
    preferenceState => preferenceState.locale,
  );

const makeSelectTheme = () =>
  createSelector(
    selectPreferences,
    preferenceState => preferenceState.theme,
  );

export { selectPreferences, makeSelectLocale, makeSelectTheme };
