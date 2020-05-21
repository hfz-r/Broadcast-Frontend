import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
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

const ViewPermission = props => {
  const { data } = props;

  const classes = useStyles();

  const [selectedItems, setSelectedItems] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSelectAll = event => {
    const permission = event.target.checked ? data.map(u => u.name) : [];
    setSelectedItems(permission);
  };

  const handleSelectOne = (event, name) => {
    const selectedIndex = selectedItems.indexOf(name);
    let newSelectedItems = [];
    if (selectedIndex === -1) {
      newSelectedItems = newSelectedItems.concat(selectedItems, name);
    } else if (selectedIndex === 0) {
      newSelectedItems = newSelectedItems.concat(selectedItems.slice(1));
    } else if (selectedIndex === selectedItems.length - 1) {
      newSelectedItems = newSelectedItems.concat(selectedItems.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedItems = newSelectedItems.concat(
        selectedItems.slice(0, selectedIndex),
        selectedItems.slice(selectedIndex + 1),
      );
    }
    setSelectedItems(newSelectedItems);
  };

  const handleChangePage = (event, pg) => {
    setPage(pg);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography color="textSecondary" gutterBottom variant="body2">
          {data.length} Records found. Page {page + 1} of{' '}
          {Math.ceil(data.length / rowsPerPage)}
        </Typography>
        <Card>
          <CardHeader action={<GenericMoreButton />} title="All permissions" />
          <Divider />
          <CardContent className={classes.content}>
            <PerfectScrollbar>
              <div className={classes.inner}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedItems.length === data.length}
                          color="primary"
                          indeterminate={
                            selectedItems.length > 0 &&
                            selectedItems.length < data.length
                          }
                          onChange={handleSelectAll}
                        />
                      </TableCell>
                      <TableCell>Permission</TableCell>
                      <TableCell>Category</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.slice(0, rowsPerPage).map(p => (
                      <TableRow
                        hover
                        key={p.name}
                        selected={selectedItems.indexOf(p.name) !== -1}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={selectedItems.indexOf(p.name) !== -1}
                            color="primary"
                            onChange={event => handleSelectOne(event, p.name)}
                            value={selectedItems.indexOf(p.name) !== -1}
                          />
                        </TableCell>
                        <TableCell>{p.name}</TableCell>
                        <TableCell>{p.category}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </PerfectScrollbar>
          </CardContent>
          <CardActions className={classes.actions}>
            <TablePagination
              component="div"
              count={data.length}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              page={page}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </CardActions>
        </Card>
        <TableEditBar selected={selectedItems} />
      </div>
    </React.Fragment>
  );
};

ViewPermission.propTypes = {
  data: PropTypes.array,
};

export default ViewPermission;
