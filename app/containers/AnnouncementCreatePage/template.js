import React from 'react';
import PropTypes from 'prop-types';
import { FormSection, Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import ClearAllIcon from '@material-ui/icons/ClearAllOutlined';
import { Page } from 'components';
import {
  AboutAnnouncement,
  AnnouncementDetails,
  Header,
  ImagesFiles,
  Preferences,
  SelectProject,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3),
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
}));

const AnnouncementCreate = props => {
  const {
    pristine,
    submitting,
    reset,
    handleSubmit,
    formActions,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Announcement Create">
      <Header />
      <form onSubmit={handleSubmit}>
        <Field
          name="project"
          className={classes.selectProject}
          component={SelectProject}
        />
        <FormSection name="projectAbout">
          <AboutAnnouncement
            className={classes.aboutAnnouncement}
            formActions={formActions}
          />
        </FormSection>
        <FormSection name="projectExtras">
          <ImagesFiles className={classes.imagesFiles} />
        </FormSection>
        <FormSection name="projectDetails">
          <AnnouncementDetails
            className={classes.announcementDetails}
            {...rest}
          />
        </FormSection>
        <FormSection name="preferences">
          <Preferences className={classes.preferences} />
        </FormSection>
        <div className={classes.actions}>
          <Button
            variant="contained"
            disabled={pristine || submitting}
            onClick={reset}
          >
            <ClearAllIcon className={classes.buttonIcon} />
            Clear
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => formActions.submit('createProject')}
          >
            Create announcement
          </Button>
        </div>
      </form>
    </Page>
  );
};

AnnouncementCreate.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
  handleSubmit: PropTypes.func,
  formActions: PropTypes.object,
};

export default reduxForm({
  form: 'createProject',
  onSubmit: values => {
    // eslint-disable-next-line no-alert
    window.alert(`Submited: \n${JSON.stringify(values, null, 2)}`);
  },
})(AnnouncementCreate);
