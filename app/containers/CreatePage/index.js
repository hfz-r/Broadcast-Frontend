import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { actions, rootSaga, reducers, selectors } from 'stores';
import createApi from 'api';
import AnnouncementCreate from './template';

class AnnouncementCreateContainer extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
    formActions: PropTypes.object,
    announcementActions: PropTypes.object,
  };

  componentWillUnmount() {
    this.props.formActions.reset('createProject');
  }

  onSubmit = values => {
    this.props.announcementActions.createMessage(values);
  };

  render() {
    const { data } = this.props;

    const { busy, error } = data.cata({
      Success: () => ({ error: null, busy: false }),
      Failure: val => ({ error: val.error, busy: false }),
      Loading: () => ({ error: null, busy: true }),
      NotAsked: () => ({ error: null, busy: false }),
    });

    const childProps = {
      busy,
      apiError: error,
      onSubmit: this.onSubmit,
    };

    return <AnnouncementCreate {...this.props} {...childProps} />;
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.announcement.makeSelectCreating(),
});

const mapDispatchToProps = dispatch => ({
  formActions: bindActionCreators(actions.form, dispatch),
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
)(AnnouncementCreateContainer);
