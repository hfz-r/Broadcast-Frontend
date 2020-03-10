import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { RichEditor } from 'components';

const useStyles = makeStyles(() => ({
  root: {},
}));

const AnnouncementDetails = props => {
  const { className, editorState, editorActions } = props;

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader title="Announcement details" />
      <CardContent>
        <RichEditor
          placeholder="Say something about the announcement..."
          editorState={editorState}
          setEditorState={editorActions.updateEditorState}
        />
      </CardContent>
    </Card>
  );
};

AnnouncementDetails.propTypes = {
  className: PropTypes.string,
  editorState: PropTypes.object,
  editorActions: PropTypes.object,
};

export default AnnouncementDetails;
