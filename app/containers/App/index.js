import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors } from 'stores';

import DashboardLayout from 'layouts/Dashboard';
import HomePage from 'containers/HomePage';
import Dashboard from 'containers/DashboardPage';
import AnnouncementList from 'containers/ListPage';
import AnnouncementCreate from 'containers/CreatePage';
import AnnouncementDetails from 'containers/DetailsPage';

const App = props => {
  const { isAuthenticated } = props;

  return (
    <Switch>
      <DashboardLayout path="/home" component={HomePage} />
      <DashboardLayout path="/dashboard" component={Dashboard} />
      <DashboardLayout
        path="/announcements/browse"
        component={AnnouncementList}
      />
      <DashboardLayout
        path="/announcements/create"
        component={AnnouncementCreate}
      />
      <DashboardLayout
        path="/announcements/:id"
        component={AnnouncementDetails}
        exact
      />
      <DashboardLayout
        path="/announcements/:id/:tab"
        component={AnnouncementDetails}
        exact
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
