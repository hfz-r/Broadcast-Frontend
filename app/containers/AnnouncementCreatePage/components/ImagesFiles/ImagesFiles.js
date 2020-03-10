import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Field } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { FilesDropzone } from 'components';

const useStyles = makeStyles(() => ({
  root: {},
}));

const ImagesFiles = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Announcement images/files/etc." />
      <CardContent>
        <Field name="files" component={FilesDropzone} />
      </CardContent>
    </Card>
  );
};

ImagesFiles.propTypes = {
  className: PropTypes.string,
};

export default ImagesFiles;
