/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/styles';
import { Typography, Divider, Button } from '@material-ui/core';
import { Page } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(7, 2, 0, 2),
  },
  container: {
    padding: 40,
    borderRadius: 8,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.white,
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.21)',
    width: 480,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
  footer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > button:last-child': {
      marginTop: 10,
    },
  },
}));

const Logout = props => {
  const { onDeauthorizeBrowser, onGoToLogin, secondsRemaining } = props;
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Logout">
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography variant="h4" gutterBottom>
            <FormattedMessage
              id="container.logout.title"
              defaultMessage="You are now logged out!"
            />
          </Typography>
          {secondsRemaining >= 6 ? null : (
            <Typography variant="caption" display="block">
              Refreshing in {secondsRemaining} seconds...
            </Typography>
          )}
        </div>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2" gutterBottom>
          <FormattedMessage
            id="container.logout.message"
            defaultMessage="Click the button below to require authorization the next time you login with this browser. Do this if you are using a shared or public computer."
          />
        </Typography>
        <div className={classes.footer}>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            color="primary"
            onClick={onDeauthorizeBrowser}
          >
            <FormattedMessage
              id="container.logout.deauth"
              defaultMessage="De-Authorize Browser"
            />
          </Button>
          <Button size="small" color="secondary" onClick={onGoToLogin}>
            <FormattedMessage
              id="container.logout.continue"
              defaultMessage="Continue to Login"
            />
          </Button>
        </div>
      </div>
    </Page>
  );
};

Logout.propTypes = {
  onDeauthorizeBrowser: PropTypes.func,
  onGoToLogin: PropTypes.func,
  secondsRemaining: PropTypes.number,
};
export default Logout;
