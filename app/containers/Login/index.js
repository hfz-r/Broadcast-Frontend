import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { actions, rootSaga, reducers, selectors } from 'stores';
import createApi from 'api';
import Login from './template';

class LoginContainer extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
    formActions: PropTypes.object,
    authActions: PropTypes.object,
    username: PropTypes.string,
    password: PropTypes.string,
  };

  componentWillUnmount() {
    this.props.formActions.reset('login');
  }

  onSubmit = () => {
    const { username, password } = this.props;
    this.props.authActions.login(username, password);
  };

  render() {
    const { data } = this.props;

    const { busy, error } = data.cata({
      Success: () => ({ error: null, busy: false }),
      Failure: val => ({ error: val.error, busy: false }),
      Loading: () => ({ error: null, busy: true }),
      NotAsked: () => ({ error: null, busy: false }),
    });

    const loginProps = {
      busy,
      loginError: error,
      onSubmit: this.onSubmit,
    };

    return <Login {...this.props} {...loginProps} />;
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.auth.makeSelectLogin(),
  username: state => formValueSelector('login')(state, 'username'),
  password: state => formValueSelector('login')(state, 'password'),
});

const mapDispatchToProps = dispatch => ({
  formActions: bindActionCreators(actions.form, dispatch),
  authActions: bindActionCreators(actions.auth, dispatch),
});

const api = createApi({ apiKey: '1770d5d9-bcea-4d28-ad21-6cbd5be018a8' });
const withSaga = injectSaga({
  key: 'auth',
  saga: rootSaga.authSaga,
  args: { api },
});

const withReducer = injectReducer({
  key: 'profile',
  reducer: reducers.profileReducer,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(LoginContainer);
