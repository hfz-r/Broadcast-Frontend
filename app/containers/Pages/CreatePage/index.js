import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from 'stores';
import CreatePage from './template';

class AnnouncementCreateContainer extends React.PureComponent {
  componentDidMount() {
    this.props.formActions.initialize('createProject', {
      projectAbout: {
        start_date: moment(),
        end_date: moment().add(1, 'day'),
      },
    });
  }

  componentWillUnmount() {
    this.props.formActions.reset('createProject');
  }

  handleSubmit = values => {
    const { apiToken } = this.props;
    const sessionToken = apiToken.getOrElse('');
    this.props.announcementActions.createMessage(values, sessionToken);
  };

  render() {
    const { data } = this.props;

    const { busy, error } = data.cata({
      Success: () => ({ error: null, busy: false }),
      Failure: val => ({ error: val.error, busy: false }),
      Loading: () => ({ error: null, busy: true }),
      NotAsked: () => ({ error: null, busy: false }),
    });

    const createProps = {
      busy,
      apiError: error,
      onSubmit: this.handleSubmit,
    };

    return <CreatePage {...this.props} {...createProps} />;
  }
}

AnnouncementCreateContainer.propTypes = {
  data: PropTypes.object,
  apiToken: PropTypes.object,
  formActions: PropTypes.object,
  announcementActions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  data: selectors.announcement.makeSelectCreateMessage(),
  apiToken: selectors.profile.makeSelectApiToken(),
});

const mapDispatchToProps = dispatch => ({
  formActions: bindActionCreators(actions.form, dispatch),
  announcementActions: bindActionCreators(actions.announcement, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AnnouncementCreateContainer);
