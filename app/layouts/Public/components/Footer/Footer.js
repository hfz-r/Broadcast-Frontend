import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
  bottom: {
    margin: '16px 0',
    '& > a': {
      margin: '0 8px',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.bottom}>{/* TBA */}</div>
    </div>
  );
};

export default Footer;
