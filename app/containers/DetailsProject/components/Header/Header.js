import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Breadcrumb } from './components';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Header = ({ project }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumb slug={project.slug} />
      <Typography component="h1" variant="h3">
        {project.description}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  project: PropTypes.object,
};

export default Header;
