import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import Remote from 'utils/remote';
import { actions } from 'stores';
import { getData, getInitialValues } from './selectors';
import EditPage from './template';

class AnnouncementEditContainer extends React.PureComponent {
  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.initialValues && this.props.initialValues) {
      this.init();
    }
  }

  handleSubmit = values => {
    const { match } = this.props;
    this.props.announcementActions.editMessage(match.params.slug, values);
  };

  init = () => {
    this.props.formActions.initialize(
      'createProject',
      this.props.initialValues,
    );
  };

  render() {
    const { data } = this.props;

    const { message, busy, error } = data.cata({
      Success: val => ({ message: val, error: null, busy: false }),
      Failure: err => ({ error: err, busy: false }),
      Loading: () => ({ error: null, busy: true }),
      NotAsked: () => ({ error: null, busy: false }),
    });

    const editProps = {
      message,
      busy,
      apiError: error,
      onSubmit: this.handleSubmit,
    };

    return !message ? null : <EditPage {...this.props} {...editProps} />;
  }
}

AnnouncementEditContainer.propTypes = {
  match: PropTypes.object,
  data: PropTypes.object,
  initialValues: PropTypes.object,
  formActions: PropTypes.object,
  announcementActions: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  data: getData(state, ownProps),
  initialValues: getInitialValues(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
  formActions: bindActionCreators(actions.form, dispatch),
  announcementActions: bindActionCreators(actions.announcement, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AnnouncementEditContainer);
