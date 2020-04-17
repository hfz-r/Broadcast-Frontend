import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    paddingLeft: 28,
    alignItems: 'center',
    '& > span': {
      cursor: 'pointer',
      '&:first-child': {
        display: 'none',
      },
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 15,
      '& img': {
        height: 34,
      },
      '& > span:first-child': {
        display: 'block',
      },
    },
  },
}));

const NavbarBrand = props => {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.root} {...rest}>
      {children}
    </div>
  );
};

NavbarBrand.propTypes = {
  children: PropTypes.node,
};

export default NavbarBrand;
