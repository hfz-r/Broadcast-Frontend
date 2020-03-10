import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Divider, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { Navigation } from 'components';
import navigationConfig from './Config';

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    marginTop: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  navigation: {
    marginTop: theme.spacing(2),
  },
}));

const NavbarContent = ({ location, userSession }) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.profile}>
        <Avatar
          alt="Person"
          className={classes.avatar}
          component={RouterLink}
          src={userSession.avatar}
          to="/profile/1/timeline"
        />
        <Typography className={classes.name} variant="h4">
          {userSession.first_name} {userSession.last_name}
        </Typography>
        <Typography variant="body2">{userSession.bio}</Typography>
      </div>
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {navigationConfig.map(list => (
          <Navigation
            component="div"
            location={location}
            key={list.title}
            pages={list.pages}
            title={list.title}
          />
        ))}
      </nav>
    </div>
  );
};

NavbarContent.propTypes = {
  location: PropTypes.object,
  userSession: PropTypes.object,
};

export default NavbarContent;
