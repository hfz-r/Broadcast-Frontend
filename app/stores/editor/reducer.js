import produce from 'immer';
import { EditorState } from 'draft-js';
import { UPDATE_EDITOR_STATE } from './constants';

export const initialState = {
  editorState: EditorState.createEmpty(),
};

/* eslint-disable default-case, no-param-reassign */
const editorReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_EDITOR_STATE:
        draft.editorState = action.payload;
        break;
    }
  });

export default editorReducer;
