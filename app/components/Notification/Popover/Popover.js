import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Popover,
  CardHeader,
  CardActions,
  Divider,
  Button,
  colors,
} from '@material-ui/core';

import { NotificationList, EmptyList } from './components';

const useStyles = makeStyles(() => ({
  root: {
    width: 350,
    maxWidth: '100%',
  },
  actions: {
    backgroundColor: colors.grey[50],
    justifyContent: 'center',
  },
}));

const NotificationsPopover = props => {
  const { notifications, ...rest } = props;
  const classes = useStyles();

  return (
    <Popover
      {...rest}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <div className={classes.root}>
        <CardHeader title="Notifications" />
        <Divider />
        {notifications.length > 0 ? (
          <NotificationList notifications={notifications} />
        ) : (
          <EmptyList />
        )}
        <Divider />
        <CardActions className={classes.actions}>
          <Button component={RouterLink} size="small" to="#">
            See all
          </Button>
        </CardActions>
      </div>
    </Popover>
  );
};

NotificationsPopover.propTypes = {
  ref: PropTypes.element,
  className: PropTypes.string,
  notifications: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default NotificationsPopover;
