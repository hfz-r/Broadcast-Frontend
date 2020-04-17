import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Field } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { RenderCheckbox } from 'components/Form';

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
          Text placeholder
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <div className={classes.options}>
          <Field
            name="cb1"
            label="Lorem ipsum dolor sit amet"
            component={RenderCheckbox}
            color="primary"
          />
          <Field
            name="cb2"
            label="Consectetur adipiscing elit"
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
