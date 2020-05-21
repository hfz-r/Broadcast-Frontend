import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { filter, take } from 'ramda';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { GenericMoreButton, TableEditBar } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 700,
  },
  actions: {
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
  },
}));

const RoleCard = props => {
  const { securities: roles, securitiesCount: cnt } = props.data;
  const { className, search, onViewRole } = props;

  const classes = useStyles();

  const [selectedRoles, setSelectedRoles] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const isMatch = r =>
    !search || r.role.name.toLowerCase().indexOf(search) > -1;
  const matchedRoles = filter(isMatch, take(cnt, roles));

  const handleSelectAll = event => {
    const role = event.target.checked ? roles.map(u => u.role.name) : [];
    setSelectedRoles(role);
  };

  const handleSelectOne = (event, role) => {
    const selectedIndex = selectedRoles.indexOf(role);
    let newSelectedRoles = [];
    if (selectedIndex === -1) {
      newSelectedRoles = newSelectedRoles.concat(selectedRoles, role);
    } else if (selectedIndex === 0) {
      newSelectedRoles = newSelectedRoles.concat(selectedRoles.slice(1));
    } else if (selectedIndex === selectedRoles.length - 1) {
      newSelectedRoles = newSelectedRoles.concat(selectedRoles.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedRoles = newSelectedRoles.concat(
        selectedRoles.slice(0, selectedIndex),
        selectedRoles.slice(selectedIndex + 1),
      );
    }
    setSelectedRoles(newSelectedRoles);
  };

  const handleChangePage = (event, pg) => {
    setPage(pg);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  const roleTableRows = matchedRoles.slice(0, rowsPerPage).map((r, i) => (
    <TableRow
      hover
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      selected={selectedRoles.indexOf(r.role.name) !== -1}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={selectedRoles.indexOf(r.role.name) !== -1}
          color="primary"
          onChange={event => handleSelectOne(event, r.role.name)}
          value={selectedRoles.indexOf(r.role.name) !== -1}
        />
      </TableCell>
      <TableCell>{r.role.name}</TableCell>
      <TableCell align="center">
        {r.users.length}
        {r.users.length > 0 ? ' users' : ' user'}
      </TableCell>
      <TableCell align="center">
        {r.permissions.length}
        {r.permissions.length > 0 ? ' permissions' : ' permission'}
      </TableCell>
      <TableCell align="center">
        <Button
          color="primary"
          size="small"
          variant="outlined"
          onClick={() => onViewRole(r.permissions)}
        >
          View
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <div className={clsx(classes.root, className)}>
      <Typography color="textSecondary" gutterBottom variant="body2">
        {matchedRoles.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(matchedRoles.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader action={<GenericMoreButton />} title="All roles" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedRoles.length === matchedRoles.length}
                        color="primary"
                        indeterminate={
                          selectedRoles.length > 0 &&
                          selectedRoles.length < matchedRoles.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell align="center">Assigned Users</TableCell>
                    <TableCell align="center">Assigned Permissions</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {search && !matchedRoles.length ? (
                    <TableRow hover>
                      <TableCell align="center" colSpan={5}>
                        <Typography
                          color="textSecondary"
                          gutterBottom
                          variant="body1"
                        >
                          No roles matched your search
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : (
                    roleTableRows
                  )}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={matchedRoles.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedRoles} />
    </div>
  );
};

RoleCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  search: PropTypes.string,
  onViewRole: PropTypes.func,
};

export default RoleCard;
