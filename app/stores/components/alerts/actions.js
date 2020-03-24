import { ALERTS_CLEAR, ALERTS_DISMISS, ALERTS_SHOW } from './constants';

const generateId = () =>
  Math.random()
    .toString(36)
    .substr(2, 10);

const display = (nature, message, data, timeout) => ({
  type: ALERTS_SHOW,
  payload: { id: generateId(), nature, message, data, timeout },
});

export const displayWarning = (message, data, timeout) =>
  display('warn', message, data, timeout);

export const displayInfo = (message, data, timeout) =>
  display('info', message, data, timeout);

export const displaySuccess = (message, data, timeout) =>
  display('success', message, data, timeout);

export const displayError = (message, data, timeout) =>
  display('error', message, data, timeout);

export const clearAlerts = () => ({ type: ALERTS_CLEAR });

export const dismissAlert = id => ({ type: ALERTS_DISMISS, payload: { id } });
