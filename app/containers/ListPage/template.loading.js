import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { Page } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3),
    flexGrow: 1,
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  filter: {
    marginTop: theme.spacing(3),
  },
  results: {
    marginTop: theme.spacing(5),
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1),
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
  sortButton: {
    textTransform: 'none',
    letterSpacing: 0,
    marginRight: theme.spacing(2),
  },
  card: {
    overflow: 'hidden',
  },
  cardHeader: {
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 0,
  },
  cardHeaderAvatar: {
    flex: '0 0 auto',
    marginRight: 16,
  },
  cardHeaderContent: {
    flex: '1 1 auto',
  },
  cardContent: {
    padding: 0,
  },
  cardContentDescription: {
    padding: '16px 24px 8px 24px',
  },
  cardContentDetails: {
    padding: '8px 24px',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Announcement List - Loading">
      <div className={classes.header}>
        <Grid
          alignItems="flex-end"
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Skeleton
              animation="wave"
              variant="text"
              height={20}
              width={150}
              style={{ marginBottom: 5 }}
            />
            <Skeleton animation="wave" variant="text" height={30} width={300} />
          </Grid>
          <Grid item>
            <Skeleton animation="wave" variant="rect" height={40} width={250} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.filter}>
        <Skeleton animation="wave" variant="rect" height={200} width="100%" />
      </div>
      <div className={classes.results}>
        <div className={classes.title}>
          <Skeleton animation="wave" variant="text" height={40} width={200} />
          <div className={classes.actions}>
            <Skeleton
              animation="wave"
              className={classes.sortButton}
              variant="text"
              height={40}
              width={120}
            />
          </div>
        </div>
        <Grid container spacing={3}>
          {[1, 2, 3].map(element => (
            <Grid key={element} item md={4} sm={6} xs={12}>
              <div className={classes.card}>
                <div className={classes.cardHeader}>
                  <Skeleton
                    animation="wave"
                    className={classes.cardHeaderAvatar}
                    variant="circle"
                    width={40}
                    height={40}
                  />
                  <div className={classes.cardHeaderContent}>
                    <Skeleton
                      animation="wave"
                      variant="text"
                      height="100%"
                      width="50%"
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      height="70%"
                      width="100%"
                    />
                  </div>
                </div>
                <div className={classes.cardContent}>
                  <div className={classes.cardContentDescription}>
                    <Skeleton
                      animation="wave"
                      variant="text"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className={classes.cardContentDetails}>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      height={50}
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Page>
  );
};

export default Loading;
