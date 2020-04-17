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
import AnnouncementDetails from './template.success';

class AnnouncementDetailsContainer extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
    computedMatch: PropTypes.object.isRequired,
    announcementActions: PropTypes.object,
  };

  componentDidMount() {
    this.props.announcementActions.fetchMessage(
      this.props.computedMatch.params.slug,
    );
  }

  render() {
    const { data, ...rest } = this.props;

    return data.cata({
      Success: ({ message }) => (
        <AnnouncementDetails announcement={message} {...rest} />
      ),
      Failure: message => <Failure message={message} />,
      Loading: () => <Loading />,
      NotAsked: () => <Loading />,
    });
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.announcement.makeSelectMessage(),
  dataCount: selectors.announcement.makeSelectCountMessages(),
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
)(AnnouncementDetailsContainer);
