import React from 'react';
import { reduxForm } from 'redux-form';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Link,
  Avatar,
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { Page } from 'components';
import gradients from 'utils/gradients';
import hartalegaPlantFront from 'assets/images/hartalega_plant_front.png';
import { LoginForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(7, 2, 0, 2),
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%',
    },
  },
  content: {
    padding: theme.spacing(6, 4, 3, 4),
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  icon: {
    backgroundImage: gradients.custom,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32,
  },
  loginForm: {
    marginTop: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  person: {
    marginTop: theme.spacing(2),
    display: 'flex',
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const Login = props => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Login">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <LockIcon className={classes.icon} />
          <Typography gutterBottom variant="h3">
            Sign in
          </Typography>
          <Typography variant="subtitle2">
            Sign in using your Active Directory account
          </Typography>
          <LoginForm className={classes.loginForm} {...props} />
          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/auth/register"
            underline="always"
            variant="subtitle2"
          >
            Need some help?
          </Link>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={hartalegaPlantFront}
          title="Cover"
        >
          <Typography color="inherit" variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis.
          </Typography>
          <div className={classes.person}>
            <Avatar
              alt="Person"
              className={classes.avatar}
              src="/assets/images/avatar_2.png"
            />
            <div>
              <Typography color="inherit" variant="body1">
                Hafiz Roslan
              </Typography>
              <Typography color="inherit" variant="body2">
                Application Developer
              </Typography>
            </div>
          </div>
        </CardMedia>
      </Card>
    </Page>
  );
};

export default reduxForm({
  form: 'login',
})(Login);
