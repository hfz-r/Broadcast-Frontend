import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions, rootSaga } from 'stores';
import injectSaga from 'utils/injectSaga';
import createApi from 'api';
import Logout from './template';

class LogoutContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { secondsRemaining: 10 };
    this.onDeauthorizeBrowser = this.onDeauthorizeBrowser.bind(this);
    this.onGoToLogin = this.onGoToLogin.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState(prevState => ({
      secondsRemaining: prevState.secondsRemaining - 1,
    }));
    if (this.state.secondsRemaining <= 0) {
      this.props.authActions.logoutClearReduxStore();
    }
  }

  onGoToLogin() {
    this.props.authActions.logoutClearReduxStore();
  }

  onDeauthorizeBrowser() {
    this.props.authActions.deauthorizeBrowser();
  }

  render() {
    return (
      <Logout
        onDeauthorizeBrowser={this.onDeauthorizeBrowser}
        onGoToLogin={this.onGoToLogin}
        secondsRemaining={this.state.secondsRemaining}
      />
    );
  }
}

LogoutContainer.propTypes = {
  authActions: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(actions.auth, dispatch),
  routerActions: bindActionCreators(actions.router, dispatch),
});

const api = createApi({ apiKey: '1770d5d9-bcea-4d28-ad21-6cbd5be018a8' });
const withAuthSaga = injectSaga({
  key: 'auth',
  saga: rootSaga.authSaga,
  args: { api },
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withAuthSaga,
  withConnect,
)(LogoutContainer);
