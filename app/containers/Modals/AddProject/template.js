import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button, colors } from '@material-ui/core';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'components';
import { RenderTextField } from 'components/Form';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
  },
  content: {
    // marginTop: theme.spacing(1),
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

const AddProject = props => {
  const { position, total, invalid, pristine, submitting, ...rest } = props;
  const { reset, handleSubmit, handleCancel } = rest;

  const classes = useStyles();

  return (
    <Modal
      size="medium"
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
            id="modals.addproject.title"
            defaultMessage="Add Project"
          />
        </ModalHeader>
        <ModalBody>
          <Grid className={classes.content} container spacing={3}>
            <Grid item md={12} xs={12}>
              <Field
                name="project"
                label="Project Name"
                component={RenderTextField}
                fullWidth
                variant="outlined"
                validate={[required]}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Field
                name="description"
                label="Description"
                component={RenderTextField}
                fullWidth
                variant="outlined"
                validate={[required]}
              />
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
              id="modals.addproject.clear"
              defaultMessage="Clear"
            />
          </Button>
          <Button
            className={classes.saveButton}
            type="submit"
            variant="contained"
            disabled={invalid || submitting}
          >
            <FormattedMessage
              id="modals.addproject.save"
              defaultMessage="Save"
            />
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

AddProject.propTypes = {
  position: PropTypes.number,
  total: PropTypes.number,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default reduxForm({ form: 'addProject' })(AddProject);
