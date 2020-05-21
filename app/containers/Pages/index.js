/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CreatePage from './CreatePage';
import EditPage from './EditPage';

class PagesContainer extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route
          path="/announcements/page/edit/:slug"
          component={EditPage}
          exact
        />
        <Route path="/announcements/page/create" component={CreatePage} />
        <Redirect from="/announcements/page" to="/announcements/page/create" />
      </Switch>
    );
  }
}

export default PagesContainer;
