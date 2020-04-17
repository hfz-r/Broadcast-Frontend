import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Route } from 'react-router-dom';
import ErrorBoundary from 'providers/ErrorBoundaryProvider';
import { Snackbar } from 'components';
import { Header, Footer, ExternalLink } from './components';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.background,
    height: 'auto',
    minHeight: '100%',
    width: '100%',
    overflow: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
    },
  },
  header: {
    position: 'relative',
    width: '100%',
  },
  content: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 25px',
    zIndex: '1',
    paddingTop: 60,
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: 80,
    },
  },
});

class PublicLayoutContainer extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    component: PropTypes.elementType,
  };

  render() {
    const { classes, component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={matchProps => (
          <div className={classes.root}>
            <ErrorBoundary>
              <Snackbar />
              <div className={classes.header}>
                <Header />
              </div>
              <div className={classes.content}>
                <div />
                <div>
                  <Component {...matchProps} />
                  <ExternalLink />
                </div>
                {/* <Footer /> */}
              </div>
            </ErrorBoundary>
          </div>
        )}
      />
    );
  }
}

export default withStyles(styles)(PublicLayoutContainer);
