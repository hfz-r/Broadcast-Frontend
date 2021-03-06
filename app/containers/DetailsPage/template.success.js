import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';
import { Page, Alert } from 'components';
import { Activities, Files, Header, Overview, Subscribers } from './components';
import { data } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  tabs: {
    marginTop: theme.spacing(3),
  },
  divider: {
    backgroundColor: colors.grey[300],
  },
  alert: {
    marginTop: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(3),
  },
}));

const AnnouncementDetails = props => {
  const { computedMatch, router, ...rest } = props;
  const { slug, tab } = computedMatch.params;
  const { announcement, dataCount } = rest;

  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(false);

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const handleTabsChange = (event, value) => {
    router.push(value);
  };

  const tabs = [
    { value: 'overview', label: 'Overview' },
    { value: 'files', label: 'Files' },
    // { value: 'activity', label: 'Activity' },
    // { value: 'subscribers', label: 'Subscribers' },
  ];

  if (!tab) {
    return <Redirect to={`/announcements/${slug}/overview`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  if (!announcement) {
    return null;
  }

  return (
    <Page className={classes.root} title="Announcement Details">
      <Header announcement={announcement} announcementCount={dataCount} />
      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={tab}
        variant="scrollable"
      >
        {tabs.map(t => (
          <Tab key={t.value} label={t.label} value={t.value} />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
      {openAlert && (
        <Alert
          className={classes.alert}
          message="Lorem ipsum dolor sit amet"
          onClose={handleAlertClose}
        />
      )}
      <div className={classes.content}>
        {tab === 'overview' && <Overview announcement={announcement} />}
        {tab === 'files' && <Files files={announcement.projectExtras.files} />}
        {/* {tab === 'activity' && (
          <Activities activities={announcement.activities} />
        )}
        {tab === 'subscribers' && (
          <Subscribers subscribers={announcement.subscribers} />
        )} */}
      </div>
    </Page>
  );
};

AnnouncementDetails.propTypes = {
  router: PropTypes.object.isRequired,
  computedMatch: PropTypes.object.isRequired,
  announcement: PropTypes.object,
  dataCount: PropTypes.number,
};

export default AnnouncementDetails;
