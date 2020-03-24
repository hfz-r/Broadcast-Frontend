import produce from 'immer';
import { filter, prepend } from 'ramda';
import { ALERTS_CLEAR, ALERTS_DISMISS, ALERTS_SHOW } from './constants';

export const initialState = [];

const alertReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ALERTS_CLEAR:
        return draft;
      case ALERTS_DISMISS: {
        const { id } = action.payload;
        return filter(a => a.id !== id, draft);
      }
      case ALERTS_SHOW:
        return prepend({ ...action.payload }, draft);
      default: {
        return draft;
      }
    }
  });

export default alertReducer;
