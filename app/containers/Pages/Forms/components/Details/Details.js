import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Field } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { RichEditor } from 'components';

const useStyles = makeStyles(() => ({
  root: {},
}));

const AnnouncementDetails = props => {
  const { className } = props;

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader title="Announcement details/body" />
      <CardContent>
        <Field
          name="editor"
          component={RichEditor}
          placeholder="Say something about the announcement..."
        />
      </CardContent>
    </Card>
  );
};

AnnouncementDetails.propTypes = {
  className: PropTypes.string,
};

export default AnnouncementDetails;
