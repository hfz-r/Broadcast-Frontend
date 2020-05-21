import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
  option: {
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    maxWidth: 560,
    '& + &': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Skeleton animation="wave" variant="text" height={50} width="50%" />
      <div className={classes.option}>
        <Skeleton animation="wave" variant="rect" height={80} width="100%" />
      </div>
      <div className={classes.option}>
        <Skeleton animation="wave" variant="rect" height={80} width="100%" />
      </div>
      <div className={classes.option}>
        <Skeleton animation="wave" variant="rect" height={80} width="100%" />
      </div>
    </div>
  );
};

export default Loading;
