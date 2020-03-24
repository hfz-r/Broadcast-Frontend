import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  IconButton,
  Snackbar,
  SnackbarContent,
  colors,
} from '@material-ui/core';
import {
  CloseOutlined,
  CheckCircleOutlined,
  ErrorOutlined,
  InfoOutlined,
  WarningOutlined,
} from '@material-ui/icons';
import { getAlertContent } from './messages';

const useStyles = makeStyles(theme => ({
  default: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  success: {
    backgroundColor: colors.green[600],
    color: theme.palette.white,
  },
  info: {
    backgroundColor: colors.lightBlue[600],
    color: theme.palette.white,
  },
  warning: {
    backgroundColor: colors.orange[900],
    color: theme.palette.white,
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const icons = {
  default: <InfoOutlined />,
  success: <CheckCircleOutlined />,
  info: <InfoOutlined />,
  warning: <WarningOutlined />,
  error: <ErrorOutlined />,
};

const AlertSnackbar = props => {
  const { alerts, handleClose } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      {alerts.map(alert => {
        const { id, nature, message, data, timeout } = alert;
        const dismissTimer = timeout || 7000;
        return (
          <Snackbar
            key={id}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            autoHideDuration={dismissTimer}
            onClose={() => handleClose(id)}
            open={!!alert}
          >
            <SnackbarContent
              className={clsx(classes[nature])}
              message={
                <span className={classes.message}>
                  <span className={classes.icon}>{icons[nature]}</span>
                  {getAlertContent(message, data, handleClose, id)}
                </span>
              }
              action={
                <IconButton
                  className={classes.action}
                  color="inherit"
                  key="close"
                  onClick={() => handleClose(id)}
                >
                  <CloseOutlined />
                </IconButton>
              }
            />
          </Snackbar>
        );
      })}
    </React.Fragment>
  );
};

AlertSnackbar.propTypes = {
  alerts: PropTypes.array,
  handleClose: PropTypes.func,
};

export default AlertSnackbar;
