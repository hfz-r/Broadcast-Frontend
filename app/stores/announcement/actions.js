import * as T from './constants';

export const fetchMessages = sessionToken => ({
  type: T.FETCH_MESSAGES,
  payload: sessionToken,
});
export const fetchMessagesLoading = () => ({ type: T.FETCH_MESSAGES_LOADING });
export const fetchMessagesSuccess = messages => ({
  type: T.FETCH_MESSAGES_SUCCESS,
  payload: messages,
});
export const fetchMessagesFailure = error => ({
  type: T.FETCH_MESSAGES_FAILURE,
  payload: error,
});

export const createMessage = (message, sessionToken) => ({
  type: T.CREATE_MESSAGE,
  payload: { message, sessionToken },
});
export const createMessageLoading = () => ({ type: T.CREATE_MESSAGE_LOADING });
export const createMessageSuccess = () => ({
  type: T.CREATE_MESSAGE_SUCCESS,
  payload: {},
});
export const createMessagesFailure = error => ({
  type: T.CREATE_MESSAGE_FAILURE,
  payload: { error },
});

export const fetchMessage = slug => ({
  type: T.FETCH_MESSAGE,
  payload: { slug },
});
export const fetchMessageLoading = slug => ({
  type: T.FETCH_MESSAGE_LOADING,
  payload: { slug },
});
export const fetchMessageSuccess = (slug, message) => ({
  type: T.FETCH_MESSAGE_SUCCESS,
  payload: { slug, message },
});
export const fetchMessageFailure = (slug, error) => ({
  type: T.FETCH_MESSAGE_FAILURE,
  payload: { slug, error },
});

export const fetchProjects = () => ({ type: T.FETCH_PROJECTS });
export const fetchProjectsLoading = () => ({ type: T.FETCH_PROJECTS_LOADING });
export const fetchProjectsSuccess = projects => ({
  type: T.FETCH_PROJECTS_SUCCESS,
  payload: { projects },
});
export const fetchProjectsFailure = error => ({
  type: T.FETCH_PROJECTS_FAILURE,
  payload: { error },
});

export const createProject = project => ({
  type: T.CREATE_PROJECT,
  payload: { project },
});
export const createProjectLoading = () => ({ type: T.CREATE_PROJECT_LOADING });
export const createProjectSuccess = () => ({
  type: T.CREATE_PROJECT_SUCCESS,
  payload: {},
});
export const createProjectFailure = error => ({
  type: T.CREATE_PROJECT_FAILURE,
  payload: { error },
});

export const fetchProject = project => ({
  type: T.FETCH_PROJECT,
  payload: { project },
});
export const fetchProjectLoading = project => ({
  type: T.FETCH_PROJECT_LOADING,
  payload: { project },
});
export const fetchProjectSuccess = (project, result) => ({
  type: T.FETCH_PROJECT_SUCCESS,
  payload: { project, result },
});
export const fetchProjectFailure = (project, error) => ({
  type: T.FETCH_PROJECT_FAILURE,
  payload: { project, error },
});

export const editProject = (project, result) => ({
  type: T.EDIT_PROJECT,
  payload: { project, result },
});
export const editProjectLoading = project => ({
  type: T.EDIT_PROJECT_LOADING,
  payload: { project },
});
export const editProjectSuccess = project => ({
  type: T.EDIT_PROJECT_SUCCESS,
  payload: { project },
});
export const editProjectFailure = (project, error) => ({
  type: T.EDIT_PROJECT_FAILURE,
  payload: { project, error },
});
