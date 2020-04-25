import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';
import { Page } from 'components';
import { Header, Logs, Summary } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  tabs: {
    marginTop: theme.spacing(3),
  },
  divider: {
    backgroundColor: colors.grey[300],
  },
  content: {
    marginTop: theme.spacing(3),
  },
}));

const UserMgmtDetails = props => {
  const { computedMatch, handleSubmit, user, router, ...rest } = props;
  const { username, tab } = computedMatch.params;

  const classes = useStyles();

  const handleTabsChange = (event, value) => {
    router.push(value);
  };

  const tabs = [
    { value: 'summary', label: 'Summary' },
    { value: 'logs', label: 'Logs' },
  ];

  if (!tab) {
    return <Redirect to={`/management/${username}/summary`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <Page className={classes.root} title="User Details">
      <Header user={user} />
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
      <div className={classes.content}>
        {tab === 'summary' && (
          <Summary user={user} onSubmit={handleSubmit} {...rest} />
        )}
        {tab === 'logs' && <Logs user={user} {...rest} />}
      </div>
    </Page>
  );
};

UserMgmtDetails.propTypes = {
  computedMatch: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func,
  router: PropTypes.object.isRequired,
  user: PropTypes.object,
};

export default UserMgmtDetails;
