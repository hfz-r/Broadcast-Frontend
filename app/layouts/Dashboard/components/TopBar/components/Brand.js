import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Image } from 'components';

const useStyles = makeStyles({
  root: {
    height: 55,
    display: 'block',
    marginLeft: 10,
  },
});

const Brand = () => {
  const classes = useStyles();

  return (
    <NavLink to="/">
      <Image className={classes.root} name="brdcst-logo-transparent-3" />
    </NavLink>
  );
};

export default Brand;
