import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Header = props => {
  const { className, onAddProject, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>
          <Typography component="h1" variant="h3">
            Project
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained" onClick={onAddProject}>
            Add project
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  onAddProject: PropTypes.func,
};

export default Header;
