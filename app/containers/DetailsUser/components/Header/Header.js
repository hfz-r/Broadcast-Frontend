import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Breadcrumb } from './components';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Header = ({ user }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumb username={user.username} />
      <Typography component="h1" variant="h3">
        {user.given_name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
