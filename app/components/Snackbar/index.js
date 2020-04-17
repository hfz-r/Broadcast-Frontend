import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { actions, reducers, selectors } from 'stores';
import Snackbar from './Snackbar';

const SnackbarContainer = ({ alerts, alertActions }) => (
  <Snackbar alerts={alerts} handleClose={id => alertActions.dismissAlert(id)} />
);

SnackbarContainer.propTypes = {
  alerts: PropTypes.array,
  alertActions: PropTypes.object,
};

const mapStateToProps = state => ({
  alerts: selectors.alerts.selectAlerts(state),
});

const mapDispatchToProps = dispatch => ({
  alertActions: bindActionCreators(actions.alerts, dispatch),
});

const withReducer = injectReducer({
  key: 'alerts',
  reducer: reducers.alertReducer,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withConnect,
)(SnackbarContainer);
