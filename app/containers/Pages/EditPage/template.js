import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Page } from 'components';
import { Header } from './components';
import Template from '../Forms';
// import { Header } from '../Forms/components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3),
  },
}));

const EditPage = props => {
  const { message, ...rest } = props;

  const classes = useStyles();

  return (
    <Page className={classes.root} title="Announcement Edit">
      {/* <Header title="Edit Announcement" subtitle={message.projectAbout.title} /> */}
      <Header message={message} />
      <Template {...rest} />
    </Page>
  );
};

EditPage.propTypes = {
  message: PropTypes.object,
};

export default EditPage;
