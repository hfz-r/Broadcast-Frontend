import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { FormSection, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Backdrop,
  Collapse,
  IconButton,
  CircularProgress,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import {
  AboutAnnouncement,
  AnnouncementDetails,
  ImagesFiles,
  Preferences,
  ProjectSelector,
} from './components';
import M from './messages';

const useStyles = makeStyles(theme => ({
  location: {
    marginTop: theme.spacing(3),
  },
  selectProject: {
    marginTop: theme.spacing(3),
  },
  aboutAnnouncement: {
    marginTop: theme.spacing(3),
  },
  imagesFiles: {
    marginTop: theme.spacing(3),
  },
  announcementDetails: {
    marginTop: theme.spacing(3),
  },
  preferences: {
    marginTop: theme.spacing(3),
  },
  actions: {
    marginTop: theme.spacing(3),
    '& > button': {
      marginRight: theme.spacing(1),
    },
  },
  alert: {
    marginTop: theme.spacing(3),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.text.primary,
  },
}));

const FormTemplate = props => {
  const { invalid, pristine, submitting, busy, apiError, ...rest } = props;
  const { reset, handleSubmit, formActions } = rest;

  const classes = useStyles();
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => setOpenBackdrop(busy), [busy]);
  useEffect(() => setOpenAlert(!!apiError), [!!apiError]);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Collapse in={openAlert}>
          <Alert
            className={classes.alert}
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>
              {props.mode === 'create'
                ? 'Error - Failed to create announcement.'
                : 'Error - Failed to edit announcement.'}
            </AlertTitle>
            {apiError &&
              (typeof apiError === 'string' ? (
                apiError
              ) : (
                <ul>
                  {Object.entries(apiError).map(([key, value]) => (
                    <li key={key}>{value}</li>
                  ))}
                </ul>
              ))}
          </Alert>
        </Collapse>
        <FormSection name="projectSelector">
          <ProjectSelector className={classes.selectProject} />
        </FormSection>
        <FormSection name="projectAbout">
          <AboutAnnouncement
            className={classes.aboutAnnouncement}
            formActions={formActions}
          />
        </FormSection>
        <FormSection name="projectDetails">
          <AnnouncementDetails className={classes.announcementDetails} />
        </FormSection>
        <FormSection name="projectExtras">
          <ImagesFiles className={classes.imagesFiles} />
        </FormSection>
        <FormSection name="projectPreferences">
          <Preferences className={classes.preferences} />
        </FormSection>
        <div className={classes.actions}>
          <Button
            variant="contained"
            disabled={pristine || submitting}
            onClick={reset}
          >
            <FormattedMessage {...M.buttonClear} />
          </Button>
          <Button
            color="primary"
            variant="contained"
            disabled={invalid || submitting || busy}
            onClick={() => formActions.submit('createProject')}
          >
            {props.mode === 'create' ? (
              <FormattedMessage {...M.buttonCreateAnnouncement} />
            ) : (
              <FormattedMessage {...M.buttonEditAnnouncement} />
            )}
          </Button>
        </div>
      </form>
      <Backdrop
        className={classes.backdrop}
        open={openBackdrop}
        onClick={() => setOpenBackdrop(!submitting)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
};

FormTemplate.propTypes = {
  mode: PropTypes.oneOf(['create', 'edit']),
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  busy: PropTypes.bool,
  apiError: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  reset: PropTypes.func,
  handleSubmit: PropTypes.func,
  formActions: PropTypes.object,
};

export default reduxForm({
  form: 'createProject',
})(FormTemplate);
