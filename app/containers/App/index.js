import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import DashboardLayout from 'layouts/Dashboard';
import PublicLayout from 'layouts/Public';
import Login from 'containers/Login';
import Logout from 'containers/Logout';
import Dashboard from 'containers/DashboardPage';
import AnnouncementList from 'containers/ListPage';
import AnnouncementCreate from 'containers/CreatePage';
import AnnouncementDetails from 'containers/DetailsPage';
import UserMgmt from 'containers/UserMgmt';
import UserMgmtDetails from 'containers/DetailsUser';

const App = props => {
  const { isAuthenticated } = props;

  return (
    <Switch>
      <PublicLayout path="/login" component={Login} />
      <PublicLayout exclude path="/logout" component={Logout} />
      <DashboardLayout path="/home" component={Dashboard} />
      <DashboardLayout
        path="/announcements/browse"
        component={AnnouncementList}
      />
      <DashboardLayout
        path="/announcements/create"
        component={AnnouncementCreate}
      />
      <DashboardLayout
        path="/announcements/:slug"
        component={AnnouncementDetails}
        exact
      />
      <DashboardLayout
        path="/announcements/:slug/:tab"
        component={AnnouncementDetails}
        exact
      />
      <DashboardLayout path="/management/users" component={UserMgmt} />
      <DashboardLayout
        path="/management/:username"
        component={UserMgmtDetails}
        exact
      />
      <DashboardLayout
        path="/management/:username/:tab"
        component={UserMgmtDetails}
        exact
      />
      {isAuthenticated ? (
        <Redirect from="/" to="/home" />
      ) : (
        <Redirect from="/" to="/login" />
      )}
    </Switch>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const withConnect = connect(
  mapStateToProps,
  undefined,
);

export default compose(
  withConnect,
  memo,
)(App);
