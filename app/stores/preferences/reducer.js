import produce from 'immer';

import { CHANGE_LOCALE, SET_THEME } from './constants';
import { DEFAULT_LOCALE } from '../../i18n';

export const initialState = {
  locale: DEFAULT_LOCALE,
  theme: 'default',
};

/* eslint-disable default-case, no-param-reassign */
const preferencesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCALE:
        draft.locale = action.payload;
        break;
      case SET_THEME:
        draft.theme = action.payload;
        break;
    }
  });

export default preferencesReducer;
