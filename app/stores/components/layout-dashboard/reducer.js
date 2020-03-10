import produce from 'immer';
import { TOGGLE_LAYOUT_DASHBOARD_MENU } from './constants';

export const initialState = {
  toggle: true,
};

/* eslint-disable default-case, no-param-reassign */
const layoutDashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_LAYOUT_DASHBOARD_MENU:
        draft.toggle = !state.toggle;
        break;
    }
  });

export default layoutDashboardReducer;
