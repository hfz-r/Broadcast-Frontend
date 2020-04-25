import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Hidden } from '@material-ui/core';
import { connect } from 'react-redux';
import { actions } from 'stores';
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
    userData,
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
            <NavbarContent {...rest} location={location} user={userData} />
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer open variant="permanent">
          <div className={clsx(classes.root, className)}>
            <NavbarContent {...rest} location={location} user={userData} />
          </div>
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  toggleMenu: PropTypes.bool,
  location: PropTypes.object,
  userData: PropTypes.object,
  onToggleDashboardMenu: PropTypes.func,
};

const mapStateToProps = state => ({
  toggleMenu: state.layoutDashboard.toggle,
  location: state.router.location,
  userData: state.profile.userData.getOrElse({}),
});

const mapDispatchToProps = dispatch => ({
  onToggleDashboardMenu: () =>
    dispatch(actions.layoutDashboard.toggleLayoutDashboardMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
