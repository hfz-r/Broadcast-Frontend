import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  root: {},
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  startDateButton: {
    marginRight: theme.spacing(1),
  },
  endDateButton: {
    marginLeft: theme.spacing(1),
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Header = props => {
  const { className, user, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography component="h2" gutterBottom variant="overline">
        Home
      </Typography>
      <Typography component="h1" gutterBottom variant="h3">
        {!user.given_name ? (
          <Skeleton variant="text" animation="wave" width="50%" />
        ) : (
          `Hi, ${user.given_name}`
        )}
      </Typography>
      <Typography variant="subtitle1">
        {!user.given_name ? (
          <Skeleton variant="text" animation="wave" width="50%" />
        ) : (
          `Here's what's happening`
        )}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
};

Header.defaultProps = {};

export default Header;
