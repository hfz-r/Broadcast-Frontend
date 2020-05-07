import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import Remote from 'utils/remote';
import injectReducer from 'utils/injectReducer';
import { actions, reducers, selectors } from 'stores';
import WidgetLayout from './template';

class WidgetLayoutContainer extends React.PureComponent {
  componentDidMount() {
    const { profile, profileActions, computedMatch } = this.props;
    if (Remote.NotAsked.is(profile.apiToken)) {
      profileActions.setApiTokenSuccess(computedMatch.params.token);
    }
  }

  render() {
    const { path, computedMatch, component: Component, ...rest } = this.props;

    return (
      <Route
        path={path}
        render={() => (
          <WidgetLayout>
            <Component computedMatch={computedMatch} {...rest} />
          </WidgetLayout>
        )}
      />
    );
  }
}

WidgetLayoutContainer.propTypes = {
  path: PropTypes.string,
  computedMatch: PropTypes.object,
  component: PropTypes.elementType,
  profile: PropTypes.object,
  profileActions: PropTypes.object,
};

const mapStateToProps = state => ({
  profile: selectors.profile.selectProfile(state),
});

const mapDispatchToProps = dispatch => ({
  router: bindActionCreators(actions.router, dispatch),
  profileActions: bindActionCreators(actions.profile, dispatch),
});

const withProfileReducer = injectReducer({
  key: 'profile',
  reducer: reducers.profileReducer,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withProfileReducer,
  withConnect,
)(WidgetLayoutContainer);
