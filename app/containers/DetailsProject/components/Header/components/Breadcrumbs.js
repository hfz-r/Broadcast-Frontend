import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Breadcrumb = ({ slug }) => {
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
          to="/management/project"
          variant="overline"
        >
          Projects
        </Link>
      </Typography>
      <Typography component="h2" gutterBottom variant="caption">
        {slug}
      </Typography>
    </Breadcrumbs>
  );
};

Breadcrumb.propTypes = {
  slug: PropTypes.string,
};
export default Breadcrumb;
