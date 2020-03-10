import { CHANGE_LOCALE, SET_THEME } from './constants';

export const changeLocale = languageLocale => ({
  type: CHANGE_LOCALE,
  payload: { languageLocale },
});

export const setTheme = theme => ({ type: SET_THEME, payload: { theme } });
