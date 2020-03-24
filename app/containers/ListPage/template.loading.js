import React, { useState } from 'react';
import { Page, SkeletonRectangle } from 'components';
import { Grid, Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
    marginTop: theme.spacing(6),
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.text.primary,
  },
}));

const Loading = () => {
  const classes = useStyles();

  const [openBackdrop, setOpenBackdrop] = useState(true);

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
            <SkeletonRectangle height="50px" width="300px" />
          </Grid>
          <Grid item>
            <SkeletonRectangle height="50px" width="220px" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.filter}>
        <SkeletonRectangle height="200px" width="auto" />
      </div>
      <div className={classes.results}>
        <div className={classes.title}>
          <SkeletonRectangle height="40px" width="190px" />
          <SkeletonRectangle height="40px" width="180px" />
        </div>
        <Grid container spacing={3}>
          {[1, 2, 3].map(element => (
            <Grid key={element} item md={4} sm={6} xs={12}>
              <SkeletonRectangle height="200px" width="auto" />
            </Grid>
          ))}
        </Grid>
      </div>
      <Backdrop
        className={classes.backdrop}
        open={openBackdrop}
        onClick={() => {
          setOpenBackdrop(false);
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Page>
  );
};

export default Loading;
