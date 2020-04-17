import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Description = props => {
  const { description, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          Description
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  );
};

Description.propTypes = {
  description: PropTypes.string,
  className: PropTypes.string,
};

export default Description;
