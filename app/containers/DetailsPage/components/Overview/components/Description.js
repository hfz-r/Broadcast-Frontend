import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Description = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Typography variant="h4">Description:</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis,
          eros id porta tempus, elit lectus dignissim dolor, non semper mauris
          magna eu quam.
        </Typography>
      </CardContent>
    </Card>
  );
};

Description.propTypes = {
  className: PropTypes.string,
};

export default Description;
