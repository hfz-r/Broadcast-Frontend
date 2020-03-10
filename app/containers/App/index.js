import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors } from 'stores';

import DashboardLayout from 'layouts/Dashboard';
import HomePage from 'containers/HomePage';
import Dashboard from 'containers/DashboardPage';
import AnnouncementList from 'containers/AnnouncementListPage';
import AnnouncementCreate from 'containers/AnnouncementCreatePage';

const App = props => {
  const { isAuthenticated } = props;

  return (
    <Switch>
      <DashboardLayout path="/home" component={HomePage} />
      <DashboardLayout path="/dashboard" component={Dashboard} />
      <DashboardLayout
        path="/announcement/browse"
        component={AnnouncementList}
      />
      <DashboardLayout
        path="/announcement/create"
        component={AnnouncementCreate}
      />
      {isAuthenticated ? (
        <Redirect from="/" to="/dashboard" />
      ) : (
        <Redirect from="/" to="/login" />
      )}
    </Switch>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectors.auth.makeSelectAuthenticated(),
});

export default connect(mapStateToProps)(App);
