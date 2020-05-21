import { call, put, select } from 'redux-saga/effects';
import { applySpec, find, path, prop } from 'ramda';
import * as C from 'utils/services/AlertService';
import * as A from './actions';
import * as S from './selectors';
import * as actions from '../actions';
import { profile as P } from '../selectors';

export default ({ api }) => {
  const fetchMessages = function* _(action) {
    try {
      yield put(A.fetchMessagesLoading());
      const messages = yield call(api.fetchMessages, action.payload);
      yield put(A.fetchMessagesSuccess(messages));
    } catch (e) {
      yield put(A.fetchMessagesFailure(e));
    }
  };

  const submitMessage = function* _({ payload }) {
    try {
      yield put(A.createMessageLoading());
      yield call(api.createMessage, payload.message, payload.sessionToken);
      yield put(A.createMessageSuccess());
      yield put(actions.alerts.displaySuccess(C.CREATE_ANNOUNCEMENT_SUCCESS));
      yield put(actions.form.reset('createProject'));
    } catch (e) {
      yield put(A.createMessagesFailure(e.errors));
      yield put(actions.alerts.displayError(C.CREATE_ANNOUNCEMENT_ERROR));
    }
  };

  const getMessage = function* _(action) {
    const { slug } = action.payload;
    try {
      yield put(A.fetchMessageLoading(slug));
      const { messages } = (yield select(S.makeSelectMessages())).getOrElse({});
      const message = find(m => m.slug === slug, messages);
      yield put(A.fetchMessageSuccess(slug, message));
    } catch (e) {
      yield put(A.fetchMessageFailure(slug, e));
      yield put(actions.alerts.displayError(C.GET_ANNOUNCEMENT_ERROR));
    }
  };

  const fetchProjects = function* _() {
    try {
      yield put(A.fetchProjectsLoading());
      const sessionToken = (yield select(P.makeSelectApiToken())).getOrElse('');
      const projects = yield call(api.fetchProjects, sessionToken);
      yield put(A.fetchProjectsSuccess(projects));
    } catch (e) {
      yield put(A.fetchProjectsFailure(e.errors));
    }
  };

  const createProject = function* _(action) {
    const { project } = action.payload;
    try {
      yield put(A.createProjectLoading());
      const sessionToken = (yield select(P.makeSelectApiToken())).getOrElse('');
      yield call(api.createProject, project, sessionToken);
      yield call(fetchProjects);
      yield put(A.createProjectSuccess());
      yield put(actions.alerts.displaySuccess(C.CREATE_PROJECT_SUCCESS));
      yield put(actions.form.reset('addProject'));
    } catch (e) {
      yield put(A.createMessagesFailure(e.errors));
      yield put(actions.alerts.displayError(C.CREATE_PROJECT_ERROR));
    }
  };

  const getProject = function* _(action) {
    const { project } = action.payload;
    try {
      yield put(A.fetchProjectLoading(project));
      const { projects } = (yield select(S.makeSelectProjects())).getOrElse({});
      const selected = find(p => p.slug === project, projects);
      const initialValues = applySpec({
        project: prop('project'),
        description: prop('description'),
      })(selected);
      yield put(A.fetchProjectSuccess(project, selected));
      yield put(actions.form.initialize('editProject', initialValues));
    } catch (e) {
      yield put(A.fetchProjectFailure(project, e));
      yield put(actions.alerts.displayError(C.GET_PROJECT_ERROR));
    }
  };

  const editProject = function* _(action) {
    const { project, result } = action.payload;
    try {
      yield put(A.editProjectLoading(project));
      const sessionToken = (yield select(P.makeSelectApiToken())).getOrElse('');
      yield call(api.editProject, result, project, sessionToken);
      yield call(fetchProjects);
      yield put(A.fetchProject(project));
      yield put(A.editProjectSuccess(project));
      yield put(actions.alerts.displaySuccess(C.UPDATE_PROJECT_SUCCESS));
    } catch (e) {
      yield put(A.editProjectFailure(project, e));
      yield put(actions.alerts.displayError(C.UPDATE_PROJECT_ERROR));
    }
  };

  return {
    fetchMessages,
    submitMessage,
    getMessage,
    fetchProjects,
    createProject,
    getProject,
    editProject,
  };
};
