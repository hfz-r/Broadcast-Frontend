import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Breadcrumb = ({ slug, page, totalPage }) => {
  const classes = useStyles();

  return (
    <Breadcrumbs
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
          to="/announcements/browse"
          variant="overline"
        >
          Browse announcements
        </Link>
      </Typography>
      <Typography component="h2" gutterBottom variant="caption">
        {/* {`#${page}`} */}
        {slug}
      </Typography>
    </Breadcrumbs>
  );
};

Breadcrumb.propTypes = {
  slug: PropTypes.string,
  page: PropTypes.number,
  totalPage: PropTypes.number,
};
export default Breadcrumb;
