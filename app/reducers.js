import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import { reducer as formReducer } from 'redux-form/immutable';
import history from 'utils/history';
import { formReducer, authReducer, preferencesReducer } from 'stores/reducers';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    preferences: preferencesReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
