import { createSelector } from 'reselect';
import { path } from 'ramda';
import { initialState } from './reducer';

const selectAnnouncement = state => state.announcement || initialState;

const makeSelectMessages = () =>
  createSelector(
    selectAnnouncement,
    announcementState => announcementState.messages,
  );

const makeSelectCountMessages = () =>
  createSelector(
    selectAnnouncement,
    announcementState =>
      announcementState.messages.map(path(['messageCount'])).getOrElse(0),
  );

const makeSelectCreating = () =>
  createSelector(
    selectAnnouncement,
    announcementState => announcementState.creating,
  );

const makeSelectMessage = () =>
  createSelector(
    selectAnnouncement,
    announcementState => announcementState.message,
  );

export {
  selectAnnouncement,
  makeSelectMessages,
  makeSelectCountMessages,
  makeSelectCreating,
  makeSelectMessage,
};
