import { UPDATE_EDITOR_STATE } from './constants';

export const updateEditorState = editorState => ({
  type: UPDATE_EDITOR_STATE,
  payload: editorState,
});
