import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { actions } from 'stores';

const MenuButton = ({ onToggleDashboardMenu }) => (
  <IconButton color="inherit" onClick={() => onToggleDashboardMenu()}>
    <MenuIcon />
  </IconButton>
);

MenuButton.propTypes = {
  onToggleDashboardMenu: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onToggleDashboardMenu: () =>
    dispatch(actions.layoutDashboard.toggleLayoutDashboardMenu()),
});

export default connect(
  null,
  mapDispatchToProps,
)(MenuButton);
