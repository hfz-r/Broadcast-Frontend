import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Badge, IconButton, colors } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';

const useStyles = makeStyles(theme => ({
  notificationsButton: {
    marginLeft: theme.spacing(1),
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600],
  },
}));

const ToggleButton = props => {
  const { notificationsRef, notifications, ...rest } = props;
  const classes = useStyles();

  return (
    <IconButton
      {...rest}
      className={classes.notificationsButton}
      color="inherit"
      ref={notificationsRef}
    >
      <Badge
        badgeContent={notifications.length}
        classes={{ badge: classes.notificationsBadge }}
        variant="dot"
      >
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

ToggleButton.propTypes = {
  notificationsRef: PropTypes.object,
  handleNotificationsOpen: PropTypes.func,
  notifications: PropTypes.array,
};

export default ToggleButton;
