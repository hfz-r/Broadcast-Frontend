import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
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

const Dashboard = props => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Header user={props.userData} />
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

Dashboard.propTypes = {
  userData: PropTypes.object,
};

const mapStateToProps = state => ({
  userData: state.profile.userData.getOrElse({}),
});

export default connect(
  mapStateToProps,
  null,
)(Dashboard);
