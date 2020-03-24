import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import { Label } from 'components';
import getInitials from 'utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    paddingBottom: 0,
  },
  content: {
    paddingTop: 0,
  },
  listItem: {
    padding: theme.spacing(2, 0),
    justifyContent: 'space-between',
  },
  tags: {
    padding: theme.spacing(0, 0, 1, 0),
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
}));

const Holder = props => {
  const { announcement, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        avatar={
          <Avatar
            alt="Author"
            className={classes.avatar}
            component={RouterLink}
            src={announcement.author.avatar}
            to="/profile/1/timeline"
          >
            {getInitials(announcement.author.name)}
          </Avatar>
        }
        className={classes.header}
        disableTypography
        subheader={
          <Typography
            component={RouterLink}
            to="/profile/1/timeline"
            variant="h5"
          >
            {announcement.author.name}
          </Typography>
        }
        title={
          <Typography display="block" variant="overline">
            Announcement holder
          </Typography>
        }
      />
      <CardContent className={classes.content}>
        <List>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2">End Date</Typography>
            <Typography variant="h6">
              {moment(announcement.end_date).format('DD MMM YYYY')}
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2">Project</Typography>
            <Typography variant="h6">{announcement.project}</Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2">Tags</Typography>
            <div className={classes.tags}>
              {announcement.tags.map(tag => (
                <Label color={tag.color} key={tag.text}>
                  {tag.text}
                </Label>
              ))}
            </div>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2">Last Update</Typography>
            <Typography variant="h6">
              {moment(announcement.updated_at).format('DD MMM YYYY')}
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

Holder.propTypes = {
  className: PropTypes.string,
  announcement: PropTypes.object.isRequired,
};

export default Holder;
