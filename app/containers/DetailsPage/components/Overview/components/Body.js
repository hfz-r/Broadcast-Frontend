import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent } from '@material-ui/core';
import { Markdown } from 'components';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Body = props => {
  const { body, className, ...rest } = props;

  const classes = useStyles();

  return (
    body && (
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent>
          <Markdown source={body} />
        </CardContent>
      </Card>
    )
  );
};

Body.propTypes = {
  body: PropTypes.string,
  className: PropTypes.string,
};

export default Body;
