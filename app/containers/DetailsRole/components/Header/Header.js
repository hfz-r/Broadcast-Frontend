import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Breadcrumb } from './components';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Header = ({ role }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumb name={role.name.toLowerCase()} />
      <Typography component="h1" variant="h3">
        {role.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  role: PropTypes.object,
};

export default Header;
