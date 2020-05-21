import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Breadcrumb } from './components';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Header = ({ message }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumb slug={message.slug} />
      <Typography component="h1" variant="h3">
        {message.projectAbout.title}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  message: PropTypes.object,
};

export default Header;
