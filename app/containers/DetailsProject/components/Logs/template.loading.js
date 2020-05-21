import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Skeleton animation="wave" variant="text" height={50} width="100%" />
      <Skeleton animation="wave" variant="rect" height={150} width="100%" />
    </div>
  );
};

export default Loading;
