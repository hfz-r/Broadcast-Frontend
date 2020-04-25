import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  colors,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import { Label } from 'components';
import capitalizeWords from 'utils/capitalizeWords';
import UserEdit from './UserEdit';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0,
    },
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
}));

const UserInfo = props => {
  const { user, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="User info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{user.full_name}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Email</TableCell>
              <TableCell>
                {user.email}
                <div>
                  {/* todo */}
                  <Label
                    color={
                      user.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {user.verified ? 'Email verified' : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Department</TableCell>
              <TableCell>{user.department}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Designation</TableCell>
              <TableCell>{capitalizeWords(user.designation)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone</TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address</TableCell>
              <TableCell>
                {user.address ? `${user.address}, ` : ''}
                Malaysia
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
        <Button>
          <LockOpenIcon className={classes.buttonIcon} />
          Recover Password
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as User
        </Button>
      </CardActions>
      <UserEdit
        {...rest}
        user={user}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserInfo;
