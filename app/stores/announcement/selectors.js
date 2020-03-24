import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAnnouncement = state => state.announcement || initialState;

const makeSelectMessages = () =>
  createSelector(
    selectAnnouncement,
    announcementState => announcementState.messages,
  );

const makeSelectCreating = () =>
  createSelector(
    selectAnnouncement,
    announcementState => announcementState.creating,
  );

export { selectAnnouncement, makeSelectMessages, makeSelectCreating };
