import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLayoutDashboard = state => state.layoutDashboard || initialState;

const makeSelectToggleMenu = () =>
  createSelector(
    selectLayoutDashboard,
    layoutDashboardState => layoutDashboardState.toggle,
  );

export { selectLayoutDashboard, makeSelectToggleMenu };
