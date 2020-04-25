import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import MaiIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {},
  sendButton: {
    marginTop: theme.spacing(2),
  },
  mailIcon: {
    marginRight: theme.spacing(1),
  },
  table: {
    marginTop: theme.spacing(2),
  },
  cell: {
    padding: theme.spacing(1),
  },
}));

// temp until create log
const emails = [
  {
    id: 1,
    description: 'Project announcements list',
    created_at: moment()
      .subtract(3, 'days')
      .subtract(5, 'hours')
      .subtract(34, 'minutes'),
  },
  {
    id: 2,
    description: 'Project charts',
    created_at: moment()
      .subtract(4, 'days')
      .subtract(11, 'hours')
      .subtract(49, 'minutes'),
  },
];

const SendEmails = props => {
  const { user, ...rest } = props;

  const classes = useStyles();

  const options = [
    'Resend last update announcement',
    'Send password reset',
    'Send verification',
  ];

  const [option, setOption] = useState(options[0]);

  const handleChange = event => {
    event.persist();
    setOption(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="Send emails" />
      <Divider />
      <CardContent className={classes.content}>
        <TextField
          fullWidth
          name="option"
          onChange={handleChange}
          select
          SelectProps={{ native: true }}
          value={option}
          variant="outlined"
        >
          {options.map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </TextField>
        <Button className={classes.sendButton} variant="contained">
          <MaiIcon className={classes.mailIcon} />
          Send email
        </Button>
        <Table className={classes.table}>
          <TableBody>
            {emails.map(email => (
              <TableRow key={email.id}>
                <TableCell className={classes.cell}>
                  {moment(email.created_at).format('DD/MM/YYYY | HH:MM')}
                </TableCell>
                <TableCell className={classes.cell}>
                  {email.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

SendEmails.propTypes = {
  user: PropTypes.object.isRequired,
};

export default SendEmails;
