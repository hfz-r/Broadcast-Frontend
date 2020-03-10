import { assocPath } from 'ramda';
import { reducer as formReducer } from 'redux-form';
import { CHANGE2 } from './constants';

const reducerReducers = (...reducers) => (prevState, value, ...args) =>
  reducers.reduce(
    (newState, reducer) => reducer(newState, value, ...args),
    prevState,
  );

const extendedReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE2: {
      const { form, field, value } = payload;
      return assocPath([...form.split('.'), 'values', field], value, state);
    }
    default:
      return state;
  }
};

export default reducerReducers(formReducer, extendedReducer);
