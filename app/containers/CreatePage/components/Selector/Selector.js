import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Field } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import RenderOptions from './RenderOptions';
import { required } from '../../validators';

const useStyles = makeStyles(theme => ({
  root: {},
  formGroup: {
    marginBottom: theme.spacing(0),
  },
}));

const ProjectSelector = props => {
  const { className } = props;

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader title="Select project" />
      <CardContent>
        <div className={classes.formGroup}>
          <Field
            name="project"
            component={RenderOptions}
            validate={[required]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

ProjectSelector.propTypes = {
  className: PropTypes.string,
};

export default ProjectSelector;
