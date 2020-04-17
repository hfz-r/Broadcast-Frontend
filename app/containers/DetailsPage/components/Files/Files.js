import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid } from '@material-ui/core';
import { FilesDropzone } from 'components';
import { FileCard } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  files: {
    marginTop: theme.spacing(3),
  },
}));

const Files = props => {
  const { files, className, handleSubmit } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Field name="files" component={FilesDropzone} />
          </form>
        </CardContent>
      </Card>
      <Grid className={classes.files} container spacing={3}>
        {files.map(file => (
          <Grid item key={file.file_id} lg={4} md={4} sm={6} xs={12}>
            <FileCard file={file} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Files.propTypes = {
  className: PropTypes.string,
  files: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'detailsProject',
})(Files);
