import React from 'react';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { reducers, rootSaga } from 'stores';
import createApi from 'api';
import Dashboard from './template';

class DashboardContainer extends React.PureComponent {
  render() {
    return <Dashboard {...this.props} />;
  }
}

const api = createApi({ apiKey: '1770d5d9-bcea-4d28-ad21-6cbd5be018a8' });
const withSaga = injectSaga({
  key: 'announcement',
  saga: rootSaga.announcementSaga,
  args: { api },
});

const withReducer = injectReducer({
  key: 'announcement',
  reducer: reducers.announcementReducer,
});

export default compose(
  withSaga,
  withReducer,
)(DashboardContainer);
