import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { filter, take } from 'ramda';
import PerfectScrollbar from 'react-perfect-scrollbar';
import moment from 'moment';
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
import { GenericMoreButton, TableEditBar } from 'components';

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

const Results = props => {
  const { projects, projectCount } = props.data;
  const { className, search } = props;

  const classes = useStyles();

  const [selectedProj, setSelectedProj] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const isMatch = proj =>
    !search || proj.project.toLowerCase().indexOf(search) > -1;
  const matchedProjects = filter(isMatch, take(projectCount, projects));

  const handleSelectAll = event => {
    const proj = event.target.checked ? projects.map(u => u.project) : [];
    setSelectedProj(proj);
  };

  const handleSelectOne = (event, name) => {
    const selectedIndex = selectedProj.indexOf(name);
    let newSelectedProj = [];
    if (selectedIndex === -1) {
      newSelectedProj = newSelectedProj.concat(selectedProj, name);
    } else if (selectedIndex === 0) {
      newSelectedProj = newSelectedProj.concat(selectedProj.slice(1));
    } else if (selectedIndex === selectedProj.length - 1) {
      newSelectedProj = newSelectedProj.concat(selectedProj.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedProj = newSelectedProj.concat(
        selectedProj.slice(0, selectedIndex),
        selectedProj.slice(selectedIndex + 1),
      );
    }
    setSelectedProj(newSelectedProj);
  };

  const handleChangePage = (event, pg) => {
    setPage(pg);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  const projTableRows = matchedProjects.slice(0, rowsPerPage).map((proj, i) => (
    <TableRow
      hover
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      selected={selectedProj.indexOf(proj.project) !== -1}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={selectedProj.indexOf(proj.project) !== -1}
          color="primary"
          onChange={event => handleSelectOne(event, proj.project)}
          value={selectedProj.indexOf(proj.project) !== -1}
        />
      </TableCell>
      <TableCell>
        <div className={classes.nameCell}>
          <Avatar className={classes.avatar}>
            {getInitials(proj.project)}
          </Avatar>
          <div>
            <Link
              color="inherit"
              component={RouterLink}
              to={`/management/p/${proj.slug}`}
              variant="h6"
            >
              {proj.project}
            </Link>
            <div>{proj.description}</div>
          </div>
        </div>
      </TableCell>
      <TableCell align="center">{proj.message_ids.length}</TableCell>
      <TableCell>
        {proj.modified_by}
        <Typography variant="body2">
          {moment(proj.modified_on).format('DD/MM/YYYY | HH:MM')}
        </Typography>
      </TableCell>
      <TableCell align="right">
        <Button
          color="primary"
          component={RouterLink}
          size="small"
          to={`/management/p/${proj.slug}`}
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
        {matchedProjects.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(matchedProjects.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader action={<GenericMoreButton />} title="All projects" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedProj.length === matchedProjects.length}
                        color="primary"
                        indeterminate={
                          selectedProj.length > 0 &&
                          selectedProj.length < matchedProjects.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Project</TableCell>
                    <TableCell align="center">Records</TableCell>
                    <TableCell>Last Update</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {search && !matchedProjects.length ? (
                    <TableRow hover>
                      <TableCell align="center" colSpan={4}>
                        <Typography
                          color="textSecondary"
                          gutterBottom
                          variant="body1"
                        >
                          No project matched your search
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : (
                    projTableRows
                  )}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={matchedProjects.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedProj} />
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  search: PropTypes.string,
};

export default Results;
