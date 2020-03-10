import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import { reducer as formReducer } from 'redux-form/immutable';
import history from 'utils/history';
import { formReducer, preferencesReducer } from 'stores/reducers';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    preferences: preferencesReducer,
    form: formReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
