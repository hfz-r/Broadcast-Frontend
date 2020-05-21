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

const makeSelectCreateMessage = () =>
  createSelector(
    selectAnnouncement,
    announcementState => announcementState.newMessage,
  );

const getMessage = (state, slug) => path([slug], selectAnnouncement(state));

const makeSelectProjects = () =>
  createSelector(
    selectAnnouncement,
    announcementState => announcementState.projects,
  );

const getProject = (state, project) =>
  path([project], selectAnnouncement(state));

export {
  selectAnnouncement,
  makeSelectMessages,
  makeSelectCountMessages,
  makeSelectCreateMessage,
  getMessage,
  makeSelectProjects,
  getProject,
};
