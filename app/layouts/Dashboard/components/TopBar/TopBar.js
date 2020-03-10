import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden } from '@material-ui/core';
import { Notification } from 'components';
import { Brand, MenuButton, Search, LogoutButton } from './components';

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1,
  },
});

const TopBar = props => {
  const { className, color } = props;
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      color={color}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <Hidden lgUp>
          <MenuButton />
        </Hidden>
        <Brand />
        <div className={classes.flexGrow} />
        <Hidden smDown>
          <Search />
        </Hidden>
        <Hidden mdDown>
          <Notification />
          <LogoutButton />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'default']),
};

TopBar.defaultProps = {
  color: 'primary',
};

export default TopBar;
