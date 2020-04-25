import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1150,
  },
  typeCell: {
    width: 150,
  },
}));

// temp until create log
const logs = [
  {
    id: 1,
    log_type: 'Add a new announcement',
    desc: "Added a new announcement ('SO duplicate') on project ('MPS')",
    IP: '127.0.0.1',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(2, 'minutes')
      .subtract(56, 'seconds'),
  },
  {
    id: 2,
    log_type: 'Give a like to announcement',
    desc:
      "Liked announcement ('Integration with Google Analytics') on project ('ACMS')",
    IP: '127.0.0.1',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(2, 'minutes')
      .subtract(56, 'seconds'),
  },
  {
    id: 3,
    log_type: 'Remove announcement files',
    desc:
      "Removed files type ('image/png') from announcement ('System maintainace schedule') on project ('ACMS')",
    IP: '127.0.0.1',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(8, 'minutes')
      .subtract(23, 'seconds'),
  },
  {
    id: 4,
    log_type: 'Add a new announcement',
    desc:
      "Added a new announcement ('Keep SQL script on patch deployment') on project ('SCM Tracker')",
    IP: '127.0.0.1',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(20, 'minutes')
      .subtract(54, 'seconds'),
  },
  {
    id: 5,
    log_type: 'Comment on announcement',
    desc: "Give a comment to announcement ('System maintainace schedule')",
    IP: '127.0.0.1',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(34, 'minutes')
      .subtract(16, 'seconds'),
  },
  {
    id: 6,
    log_type: 'Adjust role setting',
    desc: "Removed a ('Tester') role from profile",
    IP: '127.0.0.1',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(54, 'minutes')
      .subtract(30, 'seconds'),
  },
];

const Logs = props => {
  const { user, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <CardHeader title="User logs" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar options={{ suppressScrollY: true }}>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Activity</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>IP Address</TableCell>
                    <TableCell>Created</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {logs.map(log => (
                    <TableRow key={log.id}>
                      <TableCell>
                        <Typography className={classes.typeCell} variant="h6">
                          {log.log_type}
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.descCell}>
                        {log.desc}
                      </TableCell>
                      <TableCell>{log.IP}</TableCell>
                      <TableCell>
                        {moment(log.created_at).format('YYYY/MM/DD | hh:mm:ss')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
};

Logs.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Logs;
