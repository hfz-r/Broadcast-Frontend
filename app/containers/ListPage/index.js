import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { actions, reducers, rootSaga, selectors } from 'stores';
import createApi from 'api';
import Loading from './template.loading';
import Failure from './template.failure';
import AnnouncementList from './template.success';

class AnnouncementListContainer extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
    apiToken: PropTypes.object,
    announcementActions: PropTypes.object,
  };

  componentDidMount() {
    const { apiToken } = this.props;
    const sessionToken = apiToken.getOrElse('');
    this.props.announcementActions.fetchMessages(sessionToken);
  }

  render() {
    const { data, ...rest } = this.props;

    return data.cata({
      Success: value => <AnnouncementList announcements={value} {...rest} />,
      Failure: message => <Failure message={message} />,
      Loading: () => <Loading />,
      NotAsked: () => <Loading />,
    });
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.announcement.makeSelectMessages(),
  apiToken: selectors.profile.makeSelectApiToken(),
});

const mapDispatchToProps = dispatch => ({
  announcementActions: bindActionCreators(actions.announcement, dispatch),
});

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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(AnnouncementListContainer);
