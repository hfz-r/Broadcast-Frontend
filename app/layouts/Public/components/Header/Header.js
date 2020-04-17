import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { Image, Link } from 'components';
import { NavbarBrand } from './components';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    marginTop: 10,
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
  },
  version: {
    marginTop: 0,
  },
}));

const Header = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="transparent"
    >
      <Toolbar>
        <NavbarBrand>
          <div className={classes.brand}>
            <Link href="https://hartalega.com.my/">
              <Image name="brdcst-logo-transparent-1" height="40px" />
            </Link>
            <div className={classes.version}>
              <Link
                href="http://bj-tfs:8080/tfs/DefaultCollection/AnnouncementSystem"
                target="_blank"
                size="12px"
                weight={700}
                color="black"
              >
                Version {process.env.APP_VERSION}
              </Link>
            </div>
          </div>
        </NavbarBrand>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
