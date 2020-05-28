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

const Permission = props => {
  const { permission, ...rest } = props;

  const classes = useStyles();

  const permTableRows = permission.map(p => (
    <TableRow key={p.name}>
      <TableCell>{p.name}</TableCell>
      <TableCell>{p.category}</TableCell>
    </TableRow>
  ));

  return (
    <Card className={classes.root}>
      <CardHeader title="Permission" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Permission</TableCell>
                  <TableCell>Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {permission && !permission.length ? (
                  <TableRow>
                    <TableCell align="center" colSpan={2}>
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
                  permTableRows
                )}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

Permission.propTypes = {
  permission: PropTypes.array.isRequired,
};

export default Permission;
