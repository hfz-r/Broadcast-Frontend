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

const AnnouncementLog = props => {
  const { messages, ...rest } = props;

  const classes = useStyles();

  const logTableRows = messages.map(msg => (
    <TableRow key={msg.message_id}>
      <TableCell>{msg.projectAbout.title}</TableCell>
      <TableCell>{msg.projectAbout.description}</TableCell>
      <TableCell>{msg.projectAbout.category.join(', ')}</TableCell>
      <TableCell>
        {moment(msg.projectAbout.end_date).format('DD/MM/YYYY | HH:MM')}
      </TableCell>
    </TableRow>
  ));

  return (
    <Card className={classes.root}>
      <CardHeader title="Announcement log" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Expired Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {messages && !messages.length ? (
                  <TableRow>
                    <TableCell align="center" colSpan={4}>
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
                  logTableRows
                )}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

AnnouncementLog.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default AnnouncementLog;
