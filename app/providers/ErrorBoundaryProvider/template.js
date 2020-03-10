import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, useTheme, useMediaQuery } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { Page, Image } from 'components';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  imageContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto',
  },
  buttonContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
  },
  errorDetails: {
    marginTop: 20,
    whiteSpace: 'pre-wrap',
    maxHeight: 350,
    overflow: 'scroll',
    alignContent: 'center',
  },
}));

const ErrorBoundary = props => {
  const { error, errorInfo, onSubmit } = props;
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page className={classes.root} title="Error 404">
      <Typography align="center" variant={mobileDevice ? 'h4' : 'h1'}>
        <FormattedMessage {...messages.header} />
      </Typography>
      <Typography align="center" variant="subtitle2">
        {error && error.toString()}
      </Typography>
      {/* <details className={classes.errorDetails}>
        <summary>Error Details</summary>
        {errorInfo.componentStack}
      </details> */}
      <div className={classes.imageContainer}>
        <Image className={classes.image} name="error-server-down" />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          color="primary"
          component={RouterLink}
          to="/"
          variant="outlined"
          onClick={onSubmit}
        >
          <FormattedMessage {...messages.continueButton} />
        </Button>
      </div>
    </Page>
  );
};

ErrorBoundary.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  errorInfo: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default ErrorBoundary;
