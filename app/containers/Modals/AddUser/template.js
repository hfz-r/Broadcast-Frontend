import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import { FormattedMessage } from 'react-intl';
import { Grid, Typography, Button, colors } from '@material-ui/core';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'components';
import {
  RenderSwitch,
  RenderSelectMultiple,
  RenderTextField,
} from 'components/Form';
import { roles } from 'templates/config';

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
    // marginTop: theme.spacing(3),
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

const required = value =>
  value ? (
    undefined
  ) : (
    <FormattedMessage
      id="general.formhelper.required"
      defaultMessage="Required"
    />
  );

const AddUser = props => {
  const { position, total, invalid, pristine, submitting, ...rest } = props;
  const { reset, handleSubmit, handleCancel } = rest;

  const classes = useStyles();

  return (
    <Modal
      size="large"
      className={classes.root}
      position={position}
      total={total}
    >
      <form onSubmit={handleSubmit}>
        <ModalHeader
          style={{ borderBottom: 0, paddingBottom: 0 }}
          onClose={handleCancel}
        >
          <FormattedMessage
            id="modals.adduser.title"
            defaultMessage="Add User"
          />
        </ModalHeader>
        <ModalBody>
          <Grid className={classes.container} container spacing={3}>
            <Grid item md={6} xs={12}>
              <Field
                name="full_name"
                label="Name"
                component={RenderTextField}
                fullWidth
                variant="outlined"
                validate={[required]}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Field
                name="username"
                label="Username"
                component={RenderTextField}
                fullWidth
                variant="outlined"
                validate={[required]}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Field
                name="password"
                label="Password"
                component={RenderTextField}
                fullWidth
                type="password"
                variant="outlined"
                validate={[required]}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Field
                name="roles"
                label="Roles"
                payload={roles}
                component={RenderSelectMultiple}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Field
                name="email"
                label="Email address"
                component={RenderTextField}
                fullWidth
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Field
                name="phone"
                label="Phone number"
                component={RenderTextField}
                fullWidth
                type="tel"
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
                name="department"
                label="Department"
                component={RenderTextField}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography variant="h5">Email Verified</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                nec.
              </Typography>
              <Field name="verified" component={RenderSwitch} edge="start" />
            </Grid>
          </Grid>
        </ModalBody>
        <ModalFooter align="right">
          <Button
            variant="contained"
            disabled={pristine || submitting}
            style={{ marginRight: 8 }}
            onClick={reset}
          >
            <FormattedMessage
              id="modals.adduser.clear"
              defaultMessage="Clear"
            />
          </Button>
          <Button
            className={classes.saveButton}
            type="submit"
            variant="contained"
            disabled={invalid || submitting}
          >
            <FormattedMessage id="modals.adduser.save" defaultMessage="Save" />
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

AddUser.propTypes = {
  position: PropTypes.number,
  total: PropTypes.number,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default reduxForm({ form: 'addUser' })(AddUser);
