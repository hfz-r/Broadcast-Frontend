import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Link,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

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

const ProjectInfo = props => {
  const { project, onEditProject, ...rest } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Project info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell>{project.project}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Description</TableCell>
              <TableCell>{project.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Created On</TableCell>
              <TableCell>
                {moment(project.created_on).format('DD/MM/YYYY HH:MM')}
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Created By</TableCell>
              <TableCell>
                <Link
                  color="inherit"
                  component={RouterLink}
                  to={`/management/u/${project.created_by}`}
                >
                  {project.created_by}
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={() => onEditProject(project)}>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

ProjectInfo.propTypes = {
  project: PropTypes.object.isRequired,
  onEditProject: PropTypes.func,
};

export default ProjectInfo;
