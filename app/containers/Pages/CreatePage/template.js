import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Page } from 'components';
import { Header } from '../Forms/components';
import Template from '../Forms';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3),
  },
}));

const CreatePage = props => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Announcement Create">
      <Header
        title="New Announcement"
        subtitle="Have something on your mind?"
      />
      <Template mode="create" {...props} />
    </Page>
  );
};

export default CreatePage;
