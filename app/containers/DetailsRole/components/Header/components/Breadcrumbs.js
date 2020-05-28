import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Breadcrumb = ({ name }) => {
  const classes = useStyles();

  return (
    <Breadcrumbs
      className={classes.root}
      separator={
        <Typography component="h2" gutterBottom variant="overline">
          ›
        </Typography>
      }
      aria-label="breadcrumb"
    >
      <Typography component="h2" gutterBottom variant="overline">
        <Link
          color="textSecondary"
          component={RouterLink}
          to="/management/roles"
          variant="overline"
        >
          Roles
        </Link>
      </Typography>
      <Typography component="h2" gutterBottom variant="caption">
        {name}
      </Typography>
    </Breadcrumbs>
  );
};

Breadcrumb.propTypes = {
  name: PropTypes.string,
};
export default Breadcrumb;
