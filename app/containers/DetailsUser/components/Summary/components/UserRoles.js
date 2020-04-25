import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { negate, pipe, prop, sortBy } from 'ramda';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { RenderSelectMultiple } from 'components/Form';
import SaveIcon from '@material-ui/icons/SaveOutlined';
import moment from 'moment';
import { roles } from 'templates/config';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {},
  updateButton: {
    marginTop: theme.spacing(2),
  },
  saveIcon: {
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
const obj = [
  {
    id: 1,
    operation: 'Add',
    text: ['Admin', 'Tester'],
    created_at: moment()
      .subtract(7, 'days')
      .subtract(5, 'hours')
      .subtract(34, 'minutes'),
  },
  {
    id: 2,
    operation: 'Remove',
    text: ['Tester'],
    created_at: moment()
      .subtract(5, 'days')
      .subtract(1, 'hours')
      .subtract(15, 'minutes'),
  },
  {
    id: 3,
    operation: 'Add',
    text: ['QA'],
    created_at: moment()
      .subtract(2, 'days')
      .subtract(2, 'hours')
      .subtract(22, 'minutes'),
  },
];

const UserRoles = props => {
  const { user, ...rest } = props;
  const { formActions, profileActions } = rest;

  const classes = useStyles();

  const descIdSort = sortBy(
    pipe(
      prop('id'),
      negate,
    ),
  );

  return (
    <Card className={classes.root}>
      <CardHeader title="User roles" />
      <Divider />
      <CardContent className={classes.content}>
        <Field
          name="roles"
          label="Roles"
          payload={roles}
          component={RenderSelectMultiple}
        />
        <Button
          className={classes.updateButton}
          onClick={() => formActions.submit('userMgmt')}
          variant="contained"
        >
          <SaveIcon className={classes.saveIcon} />
          Update
        </Button>
        <Table className={classes.table}>
          <TableBody>
            {descIdSort(obj).map(o => (
              <TableRow key={o.id}>
                <TableCell className={classes.cell}>
                  {moment(o.created_at).format('DD/MM/YYYY | HH:MM')}
                </TableCell>
                <TableCell className={classes.cell}>{o.operation}</TableCell>
                <TableCell className={classes.cell}>
                  {o.text.join(', ')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

UserRoles.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserRoles;
