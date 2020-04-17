import { insert, last, merge, remove, update } from 'ramda';
import * as T from './constants';

const INITIAL_STATE = [];

const modals = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const nextIndex = state.length;
  const lastIndex = state.length - 1;

  switch (type) {
    case T.CLOSE_MODAL:
      return remove(lastIndex, 1, state);
    case T.CLOSE_ALL_MODALS:
      return [];
    case T.SHOW_MODAL: {
      return state.filter(x => x.type === payload.type).length === 0
        ? insert(nextIndex, payload, state)
        : state;
    }
    case T.REPLACE_MODAL: {
      return update(lastIndex, payload, state);
    }
    case T.UPDATE_MODAL: {
      const lastModal = last(state);
      const updatedModal = merge(lastModal, payload);
      return update(lastIndex, updatedModal, state);
    }
    default:
      return state;
  }
};

export default modals;
