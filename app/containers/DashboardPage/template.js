import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Page } from 'components';
import {
  Header,
  TodayHighlights,
  NewAnnouncements,
  SystemHealth,
  HotTopic,
  RealTime,
  ViewsOverTime,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Header />
      <Grid className={classes.container} container spacing={3}>
        <Grid item lg={3} sm={6} xs={12}>
          <TodayHighlights />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <NewAnnouncements />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <SystemHealth />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <HotTopic />
        </Grid>
        <Grid item lg={3} xs={12}>
          <RealTime />
        </Grid>
        <Grid item lg={9} xs={12}>
          <ViewsOverTime />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Dashboard;
