import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
  colors,
} from '@material-ui/core';
import { RenderSwitch, RenderTextField } from 'components/Form';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%',
  },
  container: {
    marginTop: theme.spacing(3),
  },
  actions: {
    justifyContent: 'flex-end',
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

const UserEdit = props => {
  const { open, onClose, user, ...rest } = props;
  const { formActions, profileActions } = rest;

  const classes = useStyles();

  if (!open) {
    return null;
  }

  const handleUserEditSubmit = () => {
    formActions.submit('userMgmt');
    onClose();
  };

  return (
    <Modal onClose={onClose} open={open}>
      <Card className={classes.root}>
        <CardContent>
          <Typography align="center" gutterBottom variant="h3">
            Edit User
          </Typography>
          <Grid className={classes.container} container spacing={3}>
            <Grid item md={6} xs={12}>
              <Field
                name="email"
                label="Email address"
                component={RenderTextField}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Field
                name="name"
                label="Full name"
                component={RenderTextField}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Field
                name="designation"
                label="Designation"
                component={RenderTextField}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Field
                name="phone"
                label="Phone number"
                component={RenderTextField}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Field
                name="address"
                label="Address"
                component={RenderTextField}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item />
            <Grid item md={6} xs={12}>
              <Typography variant="h5">Email Verified</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                nec.
              </Typography>
              <Field name="verified" component={RenderSwitch} edge="start" />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button onClick={onClose} variant="contained">
            Close
          </Button>
          <Button
            className={classes.saveButton}
            onClick={() => handleUserEditSubmit()}
            variant="contained"
          >
            Save
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

UserEdit.propTypes = {
  user: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

UserEdit.defaultProps = {
  open: false,
  onClose: () => {},
};

export default UserEdit;
