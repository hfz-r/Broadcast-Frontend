import { CHANGE_LOCALE, SET_THEME } from './constants';

export const changeLocale = locale => ({
  type: CHANGE_LOCALE,
  locale,
});

export const setTheme = theme => ({ type: SET_THEME, payload: { theme } });
