import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Typography,
} from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles(theme => ({
  root: {},
  mainActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  notice: {
    marginTop: theme.spacing(1),
  },
  deleteButton: {
    marginTop: theme.spacing(1),
    color: theme.palette.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
}));

const OtherActions = props => {
  const { user, ...rest } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Other actions" />
      <Divider />
      <CardContent>
        <div className={classes.mainActions}>
          <Button>
            <NotInterestedIcon className={classes.buttonIcon} />
            Close User Account
          </Button>
          <Button>
            <GetAppIcon className={classes.buttonIcon} />
            Export announcement data
          </Button>
        </div>
        <Typography className={classes.notice} variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
          facilisis nulla, vel pulvinar mi.
        </Typography>
        <Button className={classes.deleteButton}>
          <DeleteIcon className={classes.buttonIcon} />
          Delete User Account
        </Button>
      </CardContent>
    </Card>
  );
};

OtherActions.propTypes = {
  user: PropTypes.object.isRequired,
};

export default OtherActions;
