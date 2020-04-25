import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { Image, Navigation } from 'components';
import NavbarConfig from './Config';

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  logo: {
    width: 200,
    height: 100,
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

const NavbarContent = ({ location, user }) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.brand}>
        <RouterLink to="/home">
          <Image className={classes.logo} name="brdcst-logo-transparent-3" />
        </RouterLink>
        <Typography className={classes.name} variant="h4">
          {user.given_name}
        </Typography>
        <Typography variant="body2">{user.designation}</Typography>
      </div>
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {NavbarConfig.map(list => (
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
  user: PropTypes.object,
};

export default NavbarContent;
