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
import { Page } from 'components';
import {
  AboutAnnouncement,
  AnnouncementDetails,
  Header,
  ImagesFiles,
  Preferences,
  ProjectSelector,
} from './components';

import M from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3),
  },
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

const AnnouncementCreate = props => {
  const { invalid, submitting, busy, apiError, ...rest } = props;
  const { reset, handleSubmit, formActions } = rest;

  const classes = useStyles();
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [locationError, setLocationError] = useState(false);

  useEffect(() => setOpenBackdrop(busy), [busy]);
  useEffect(() => setOpenAlert(!!apiError), [!!apiError]);

  const handleLocationError = error => setLocationError(error);

  return (
    <Page className={classes.root} title="Announcement Create">
      <Header />
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
            <AlertTitle>Error - Failed to create announcement.</AlertTitle>
            {apiError &&
              (typeof apiError === 'string' ? (
                apiError
              ) : (
                <ul>
                  {Object.entries(apiError).map(([key, value]) => (
                    <li key={key}>
                      {`'${key}'`} {value}
                    </li>
                  ))}
                </ul>
              ))}
          </Alert>
        </Collapse>
        <FormSection name="projectSelector">
          <ProjectSelector
            className={classes.selectProject}
            onLocationError={handleLocationError}
          />
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
          <Button variant="contained" onClick={reset}>
            <FormattedMessage {...M.buttonClear} />
          </Button>
          <Button
            color="primary"
            variant="contained"
            disabled={invalid || submitting || busy || locationError}
            onClick={() => formActions.submit('createProject')}
          >
            <FormattedMessage {...M.buttonCreateAnnouncement} />
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
    </Page>
  );
};

AnnouncementCreate.propTypes = {
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  busy: PropTypes.bool,
  apiError: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  reset: PropTypes.func,
  handleSubmit: PropTypes.func,
  formActions: PropTypes.object,
};

export default reduxForm({
  form: 'createProject',
})(AnnouncementCreate);
