import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import { actions } from 'stores';

const useStyles = makeStyles(theme => ({
  logoutButton: {
    marginLeft: theme.spacing(1),
  },
  logoutIcon: {
    marginRight: theme.spacing(1),
  },
}));

const LogoutButton = props => {
  const classes = useStyles();
  return (
    <Button
      className={classes.logoutButton}
      color="inherit"
      onClick={() => props.routerActions.push('/logout')}
    >
      <InputIcon className={classes.logoutIcon} />
      Sign out
    </Button>
  );
};

LogoutButton.propTypes = {
  routerActions: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  routerActions: bindActionCreators(actions.router, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(LogoutButton);
