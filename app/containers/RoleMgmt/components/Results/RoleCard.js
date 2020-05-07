import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import { filter, take } from 'ramda';
import * as R from 'ramda';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from '@material-ui/core';
import getInitials from 'utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexWrap: 'wrap',
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
  header: {
    maxWidth: '100%',
    width: 240,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%',
    },
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  stats: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%',
    },
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%',
    },
  },
}));

const RoleCard = props => {
  const { securities: roles, securitiesCount: cnt } = props.data;
  const { className, search } = props;

  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const isMatch = r => !search || r.name.toLowerCase().indexOf(search) > -1;
  const matchedRoles = R.filter(isMatch, R.take(cnt, roles));

  return (
    <div className={clsx(classes.root, className)}>
      <Typography color="textSecondary" gutterBottom variant="body2">
        {matchedRoles.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(matchedRoles.length / rowsPerPage)}
      </Typography>
      {matchedRoles.slice(0, rowsPerPage).map(role => (
        <Card key={role.id} className={classes.card}>
          <CardContent className={classes.content}>
            <div className={classes.header}>
              <Avatar alt="Role" className={classes.avatar}>
                {getInitials(role.name)}
              </Avatar>
              <div>
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  noWrap
                  to="/management/roles"
                  variant="h5"
                >
                  {role.name}
                </Link>
              </div>
            </div>
            <div className={classes.stats}>
              <Typography variant="h6">{role.users}</Typography>
              <Typography variant="body2">Assigned users</Typography>
            </div>
            <div className={classes.stats}>
              <Typography variant="h6">{role.permissions}</Typography>
              <Typography variant="body2">Total permissions</Typography>
            </div>
            <div className={classes.actions}>
              <Button color="primary" size="small" variant="outlined">
                View
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

RoleCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  search: PropTypes.string,
};

export default RoleCard;
