import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { actions } from 'stores';
import Error from './template';

const styles = {
  root: {
    height: '100%',
  },
};

class ErrorBoundary extends React.Component {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, info) {
    this.setState({
      error,
      errorInfo: info,
    });
  }

  onSubmit = () => {
    this.setState({ error: null, errorInfo: null });
    if (this.props.isAuthenticated) {
      this.props.routerActions.push('/home');
    } else {
      this.props.routerActions.push('/login');
      window.location.reload(true);
    }
  };

  render() {
    const { classes } = this.props;

    if (this.state.error) {
      return (
        <main className={classes.root}>
          <Error
            error={this.state.error}
            errorInfo={this.state.errorInfo}
            onSubmit={this.onSubmit}
          />
        </main>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  isAuthenticated: PropTypes.bool,
  routerActions: PropTypes.object,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  routerActions: bindActionCreators(actions.router, dispatch),
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ErrorBoundary);
