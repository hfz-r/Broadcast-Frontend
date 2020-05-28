import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 700,
  },
}));

const Users = props => {
  const { users, ...rest } = props;

  const classes = useStyles();

  const userTableRows = users.map(u => (
    <TableRow key={u.username}>
      <TableCell>{u.username}</TableCell>
      <TableCell>{u.given_name}</TableCell>
      <TableCell>{u.email}</TableCell>
    </TableRow>
  ));

  return (
    <Card className={classes.root}>
      <CardHeader title="Users" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users && !users.length ? (
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body1"
                      >
                        No records found
                      </Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  userTableRows
                )}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
