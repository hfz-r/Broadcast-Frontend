import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Page } from 'components';
import { Actions, AnnouncementLog, Header, ProjectInfo } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));

const ProjectMgmtDetails = props => {
  const { handleEditProject, project, ...rest } = props;

  const classes = useStyles();

  return (
    <Page className={classes.root} title="Project Details">
      <Header project={project} />
      <Grid className={classes.container} container spacing={3}>
        <Grid item md={4} xl={3} xs={12}>
          <ProjectInfo project={project} onEditProject={handleEditProject} />
        </Grid>
        <Grid item md={8} xl={9} xs={12}>
          <AnnouncementLog messageIds={project.message_ids} {...rest} />
        </Grid>
        <Grid item md={4} xl={3} xs={12}>
          <Actions project={project} />
        </Grid>
      </Grid>
    </Page>
  );
};

ProjectMgmtDetails.propTypes = {
  handleEditProject: PropTypes.func,
  project: PropTypes.object,
};

export default ProjectMgmtDetails;
