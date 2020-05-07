import { createSelector } from 'reselect';

const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectPathName = () =>
  createSelector(
    makeSelectLocation,
    locationState => locationState.pathname,
  );

const makeSelectSearch = () =>
  createSelector(
    makeSelectLocation,
    locationState => locationState.search,
  );

export { makeSelectLocation, makeSelectPathName, makeSelectSearch };
