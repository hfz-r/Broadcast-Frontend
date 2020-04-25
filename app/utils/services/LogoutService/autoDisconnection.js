import { actions, actionTypes } from 'stores';
import { contains } from 'ramda';

let timer;
let counter;
let interval;
// Actions that won't refresh the autodisconnection timer
const blackListedActivityTypes = [
  // USER
  actionTypes.profile.SET_API_TOKEN_SUCCESS,
  actionTypes.profile.FETCH_USER_DATA_SUCCESS,
  // FORMS
  '@@redux-form/CLEAR_SUBMIT_ERRORS',
  '@@redux-form/STOP_ASYNC_VALIDATION',
  '@@redux-form/START_ASYNC_VALIDATION',
];

const AutoDisconnectionMiddleware = () => store => next => action => {
  if (action.type === actionTypes.auth.START_LOGOUT_TIMER) {
    startTimer(store);
  }
  // We reset the timer if the action is not in the blacklist
  if (!contains(action.type, blackListedActivityTypes)) {
    // 👋 Uncomment the next line to debug autoDisconnection!!
    // console.log(action.type)
    resetTimer();
  }

  return next(action);
};

const startTimer = store => {
  // eslint-disable-next-line no-multi-assign
  counter = timer = process.env.LOGOUT_TIME / 1000 || 600; // (Default: 10min )
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(refreshTimer.bind(this, store), 1000);
};

const resetTimer = () => {
  counter = timer;
};

const refreshTimer = store => {
  if (counter === 0) {
    if (interval) {
      clearInterval(interval);
    }
    store.dispatch(
      actions.modals.showModal('AutoDisconnection', { duration: timer / 60 }),
    );
  }
  counter -= 1;
};

export default AutoDisconnectionMiddleware;
