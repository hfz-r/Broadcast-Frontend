import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Page } from 'components';
import { Header, Filter, Results } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3),
    flexGrow: 1,
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  filter: {
    marginTop: theme.spacing(3),
  },
  results: {
    marginTop: theme.spacing(6),
  },
}));

const AnnouncementList = ({ announcements }) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Announcement List">
      <Header className={classes.header} />
      <Filter className={classes.filter} />
      <Results className={classes.results} announcements={announcements} />
    </Page>
  );
};

AnnouncementList.propTypes = {
  announcements: PropTypes.object,
};

export default AnnouncementList;
