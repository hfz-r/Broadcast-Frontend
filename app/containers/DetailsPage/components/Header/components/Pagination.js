import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, IconButton, Tooltip } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  pagination: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      // display: 'none',
    },
  },
  paginationDetails: {
    whiteSpace: 'nowrap',
  },
}));

const Pagination = props => {
  const { page, totalPage, children } = props;

  const classes = useStyles();

  return (
    <div className={classes.pagination}>
      <Tooltip title="Previous page">
        <IconButton size="small">
          <KeyboardArrowLeft />
        </IconButton>
      </Tooltip>
      <Typography className={classes.paginationDetails} variant="body2">
        {`${page} of ${totalPage}`}
      </Typography>
      {/* <div className={classes.paginationDetails}>{children}</div> */}
      <Tooltip title="Next page">
        <IconButton size="small">
          <KeyboardArrowRight />
        </IconButton>
      </Tooltip>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  totalPage: PropTypes.number,
  children: PropTypes.node,
};

export default Pagination;
