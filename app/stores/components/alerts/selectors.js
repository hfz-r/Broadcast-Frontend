import { initialState } from './reducer';

export const selectAlerts = state => state.alerts || initialState;
