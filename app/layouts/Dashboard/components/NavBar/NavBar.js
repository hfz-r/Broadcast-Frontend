import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { actions } from 'stores';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Hidden, Paper } from '@material-ui/core';
import { NavbarContent } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    overflowY: 'auto',
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: 256,
      flexShrink: 0,
    },
  },
}));

const NavBar = props => {
  const {
    toggleMenu,
    onToggleDashboardMenu,
    location,
    userSession,
    className,
    ...rest
  } = props;
  const classes = useStyles();

  useEffect(() => {
    if (toggleMenu) {
      onToggleDashboardMenu();
    }
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={() => onToggleDashboardMenu()}
          open={toggleMenu}
          variant="temporary"
        >
          <div className={clsx(classes.root, className)}>
            <NavbarContent
              {...rest}
              location={location}
              userSession={userSession}
            />
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          {...rest}
          className={clsx(classes.root, className)}
          elevation={1}
          square
        >
          <NavbarContent
            {...rest}
            location={location}
            userSession={userSession}
          />
        </Paper>
      </Hidden>
    </React.Fragment>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  toggleMenu: PropTypes.bool,
  location: PropTypes.object,
  userSession: PropTypes.object,
  onToggleDashboardMenu: PropTypes.func,
};

const mapStateToProps = state => ({
  toggleMenu: state.layoutDashboard.toggle,
  location: state.router.location,
  userSession: state.auth.userSession,
});

const mapDispatchToProps = dispatch => ({
  onToggleDashboardMenu: () =>
    dispatch(actions.layoutDashboard.toggleLayoutDashboardMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
