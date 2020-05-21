import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { prepend } from 'ramda';
import { Field } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import RenderOptions from './RenderOptions';
import { required } from '../../validators';

const useStyles = makeStyles(theme => ({
  root: {},
  formGroup: {
    marginBottom: theme.spacing(0),
  },
  inner: {
    height: 300,
  },
}));

const transform = projects => {
  const toPublic = {
    project: 'Public',
    description: 'Broadcast message to all projects',
    slug: 'public',
  };
  return prepend(toPublic, projects);
};

const ProjectSelector = props => {
  const { className, ...rest } = props;
  const { projects } = rest.data;

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader title="Select project" />
      <CardContent>
        <div className={classes.formGroup}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Field
                name="project"
                component={RenderOptions}
                validate={[required]}
                payload={transform(projects)}
              />
            </div>
          </PerfectScrollbar>
        </div>
      </CardContent>
    </Card>
  );
};

ProjectSelector.propTypes = {
  className: PropTypes.string,
};

export default ProjectSelector;
