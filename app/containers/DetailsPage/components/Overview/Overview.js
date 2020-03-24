import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Body, Description, Holder, Members } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  body: {
    marginTop: theme.spacing(3),
  },
  members: {
    marginTop: theme.spacing(3),
  },
}));

const Overview = props => {
  const { announcement, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid item lg={8} xl={9} xs={12}>
        <Description />
        <Body className={classes.body} body={announcement.body} />
      </Grid>
      <Grid item lg={4} xl={3} xs={12}>
        <Holder announcement={announcement} />
        <Members className={classes.members} members={announcement.members} />
      </Grid>
    </Grid>
  );
};

Overview.propTypes = {
  className: PropTypes.string,
  announcement: PropTypes.object.isRequired,
};

export default Overview;
