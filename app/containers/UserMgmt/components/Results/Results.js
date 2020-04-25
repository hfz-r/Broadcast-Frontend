import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { filter, take } from 'ramda';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  colors,
} from '@material-ui/core';
import getInitials from 'utils/getInitials';
import capitalizeWords from 'utils/capitalizeWords';
import { GenericMoreButton, Label, TableEditBar } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 700,
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1),
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end',
  },
  label: {
    color: colors.grey[700],
    margin: 1,
  },
}));

const decode = (data, type) => {
  const src = `data:${type};base64,${data}`;
  return src;
};

const Results = props => {
  const { users, userCount } = props.data;
  const { className, search } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const isMatch = user =>
    !search || user.full_name.toLowerCase().indexOf(search) > -1;
  const matchedUsers = filter(isMatch, take(userCount, users));

  const handleSelectAll = event => {
    const user = event.target.checked ? users.map(u => u.guid) : [];
    setSelectedUsers(user);
  };

  const handleSelectOne = (event, guid) => {
    const selectedIndex = selectedUsers.indexOf(guid);
    let newSelectedUsers = [];
    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, guid);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1),
      );
    }
    setSelectedUsers(newSelectedUsers);
  };

  const handleChangePage = (event, pg) => {
    setPage(pg);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  const userTableRows = matchedUsers.slice(0, rowsPerPage).map((user, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <TableRow hover key={i} selected={selectedUsers.indexOf(user.guid) !== -1}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={selectedUsers.indexOf(user.guid) !== -1}
          color="primary"
          onChange={event => handleSelectOne(event, user.guid)}
          value={selectedUsers.indexOf(user.guid) !== -1}
        />
      </TableCell>
      <TableCell>
        <div className={classes.nameCell}>
          <Avatar
            className={classes.avatar}
            src={decode(user.image, 'image/jpeg')}
          >
            {getInitials(user.given_name)}
          </Avatar>
          <div>
            <Link
              color="inherit"
              component={RouterLink}
              to={`/management/${user.username}`}
              variant="h6"
            >
              {user.given_name}
            </Link>
            <div>{user.email}</div>
          </div>
        </div>
      </TableCell>
      <TableCell>{capitalizeWords(user.designation)}</TableCell>
      <TableCell>
        {user.roles.map(x => (
          <Label key={x} className={classes.label}>
            {x}
          </Label>
        ))}
      </TableCell>
      <TableCell>{user.phone ? user.phone : 'n/a'}</TableCell>
      <TableCell align="right">
        <Button
          color="primary"
          component={RouterLink}
          size="small"
          to={`/management/${user.username}`}
          variant="outlined"
        >
          View
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <div className={clsx(classes.root, className)}>
      <Typography color="textSecondary" gutterBottom variant="body2">
        {matchedUsers.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(matchedUsers.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader action={<GenericMoreButton />} title="All users" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedUsers.length === matchedUsers.length}
                        color="primary"
                        indeterminate={
                          selectedUsers.length > 0 &&
                          selectedUsers.length < matchedUsers.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Designation</TableCell>
                    <TableCell>Roles</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {search && !matchedUsers.length ? (
                    <TableRow hover>
                      <TableCell align="center" colSpan={6}>
                        <Typography
                          color="textSecondary"
                          gutterBottom
                          variant="body1"
                        >
                          No users matched your search
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
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={matchedUsers.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedUsers} />
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  search: PropTypes.string,
};

export default Results;
