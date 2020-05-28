import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Page } from 'components';
import { Actions, Header, Permission, Users } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));

const RoleMgmtDetails = props => {
  const { data, ...rest } = props;

  const classes = useStyles();

  return (
    <Page className={classes.root} title="Role Details">
      <Header role={data.role} />
      <Grid className={classes.container} container spacing={3}>
        <Grid item xs>
          <Permission permission={data.permissions} {...rest} />
        </Grid>
        <Grid item xs>
          <Users users={data.users} {...rest} />
        </Grid>
        <Grid item md={4} xl={3} xs={12}>
          <Actions data={data} {...rest} />
        </Grid>
      </Grid>
    </Page>
  );
};

RoleMgmtDetails.propTypes = {
  data: PropTypes.object,
};

export default RoleMgmtDetails;
