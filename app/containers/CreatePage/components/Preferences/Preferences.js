import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Field } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { RenderCheckbox } from './RenderCheckbox';

const useStyles = makeStyles(theme => ({
  root: {},
  options: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Preferences = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Preferences" />
      <CardContent>
        <Typography gutterBottom variant="h6">
          Privacy
        </Typography>
        <Typography variant="body2">
          You will recieve emails in your email address
        </Typography>
        <div className={classes.options}>
          <Field
            name="cb1"
            label="Lorem ipsum dolor sit"
            component={RenderCheckbox}
            color="primary"
          />
          <Field
            name="cb2"
            label="Lorem ipsum dolor sit"
            component={RenderCheckbox}
            color="primary"
          />
        </div>
      </CardContent>
    </Card>
  );
};

Preferences.propTypes = {
  className: PropTypes.string,
};

export default Preferences;
