import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import { actions, selectors, reducers } from 'stores';
import DashboardLayout from './template';

class DashboardLayoutContainer extends React.Component {
  static propTypes = {
    path: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object,
    computedMatch: PropTypes.object,
    component: PropTypes.elementType,
  };

  componentDidMount() {
    // temp before implement login
    this.props.auth.authenticate();
  }

  render() {
    const {
      isAuthenticated,
      path,
      computedMatch,
      component: Component,
      ...rest
    } = this.props;

    return isAuthenticated ? (
      <Route
        path={path}
        render={() => (
          <DashboardLayout>
            <Component computedMatch={computedMatch} {...rest} />
          </DashboardLayout>
        )}
      />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: '' } }} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectors.auth.makeSelectAuthenticated(),
  toggleMenu: selectors.layoutDashboard.makeSelectToggleMenu(),
});

const mapDispatchToProps = dispatch => ({
  auth: bindActionCreators(actions.auth, dispatch),
  router: bindActionCreators(actions.router, dispatch),
  layout: bindActionCreators(actions.layoutDashboard, dispatch),
});

const withAuthReducer = injectReducer({
  key: 'auth',
  reducer: reducers.authReducer,
});

const withLayoutReducer = injectReducer({
  key: 'layoutDashboard',
  reducer: reducers.layoutDashboardReducer,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withAuthReducer,
  withLayoutReducer,
  withConnect,
)(DashboardLayoutContainer);
