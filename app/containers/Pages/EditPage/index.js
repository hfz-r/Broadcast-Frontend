/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'stores';
import { getData, getInitialValues } from './selectors';
import EditPage from './template';

class AnnouncementEditContainer extends React.PureComponent {
  componentDidMount() {
    this.init();
  }

  init = () => {
    this.props.formActions.initialize(
      'createProject',
      this.props.initialValues,
    );
  };

  handleSubmit = () => {};

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

    return <EditPage {...this.props} {...editProps} />;
  }
}

AnnouncementEditContainer.propTypes = {
  data: PropTypes.object,
  initialValues: PropTypes.object,
  formActions: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  data: getData(state, ownProps),
  initialValues: getInitialValues(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
  formActions: bindActionCreators(actions.form, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AnnouncementEditContainer);
