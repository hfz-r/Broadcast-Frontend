import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectEditor = state => state.editor || initialState;

const makeSelectEditor = () =>
  createSelector(
    selectEditor,
    editorState => editorState.editorState,
  );

export { selectEditor, makeSelectEditor };
