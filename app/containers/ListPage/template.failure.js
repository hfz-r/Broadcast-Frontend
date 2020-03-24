import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { prop } from 'ramda';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Page } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3),
    flexGrow: 1,
  },
}));

const Failure = props => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Announcement List - Error">
      <Typography align="center" variant="h4" color="error">
        {prop('message', props.status) || (
          <FormattedMessage
            id="container.AnnouncementList.onload.failure"
            defaultMessage="Something went wrong. Please refresh!"
          />
        )}
      </Typography>
    </Page>
  );
};

Failure.propTypes = {
  status: PropTypes.string,
};

export default Failure;
