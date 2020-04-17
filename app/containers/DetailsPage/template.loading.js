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
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  headerLabel: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(0, 0, 1, 0),
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
  headerButton: {
    marginRight: theme.spacing(2),
  },
  tabs: {
    marginTop: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(3),
  },
  descCard: {
    overflow: 'hidden',
    backgroundColor: 'rgb(238, 238, 238)',
  },
  descCardContent: {
    padding: 14,
  },
  bodyCard: {
    marginTop: theme.spacing(3),
    padding: 14,
    backgroundColor: 'rgb(238, 238, 238)',
    overflow: 'hidden',
  },
  holderCard: {
    overflow: 'hidden',
    backgroundColor: 'rgb(238, 238, 238)',
  },
  holderCardHeader: {
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 0,
  },
  holderCardHeaderAvatar: {
    flex: '0 0 auto',
    marginRight: 16,
  },
  holderCardHeaderContent: {
    flex: '1 1 auto',
  },
  holderCardContent: {
    padding: 14,
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Announcement Details - Loading">
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
            <div className={classes.headerLabel}>
              <Skeleton variant="text" height={20} width={50} />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.headerButton}>
              <Skeleton
                animation="wave"
                variant="rect"
                height={40}
                width={200}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.tabs}>
        <Skeleton animation="wave" variant="rect" height={50} width="100%" />
      </div>
      <div className={classes.content}>
        <Grid container spacing={3}>
          <Grid item lg={8} xl={9} xs={12}>
            <div className={classes.descCard}>
              <div className={classes.descCardContent}>
                <Skeleton
                  animation="wave"
                  variant="text"
                  height={30}
                  width="40%"
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  height={20}
                  width="80%"
                />
              </div>
            </div>
            <div className={classes.bodyCard}>
              <Skeleton
                animation="wave"
                variant="rect"
                height={250}
                width="100%"
              />
            </div>
          </Grid>
          <Grid item lg={4} xl={3} xs={12}>
            <div className={classes.holderCard}>
              <div className={classes.holderCardHeader}>
                <Skeleton
                  animation="wave"
                  className={classes.holderCardHeaderAvatar}
                  variant="circle"
                  width={40}
                  height={40}
                />
                <div className={classes.holderCardHeaderContent}>
                  <Skeleton
                    animation="wave"
                    variant="text"
                    height={20}
                    width="30%"
                  />
                  <Skeleton
                    animation="wave"
                    variant="text"
                    height={30}
                    width="60%"
                  />
                </div>
              </div>
              <div className={classes.holderCardContent}>
                <Skeleton
                  animation="wave"
                  variant="rect"
                  height={100}
                  width="100%"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};

export default Loading;
