import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, colors } from '@material-ui/core';
import NewReleasesOutlinedIcon from '@material-ui/icons/NewReleasesOutlined';
import { Label } from 'components';
import gradients from 'utils/gradients';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48,
  },
}));

const Announcement = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const data = {
    title: 'Title',
    tag: 'tag',
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          New projects
        </Typography>
        <div className={classes.details}>
          <Typography variant="h3">{data.title}</Typography>
          <Label
            className={classes.label}
            color={colors.red[600]}
            variant="outlined"
          >
            {data.tag}
          </Label>
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <NewReleasesOutlinedIcon />
      </Avatar>
    </Card>
  );
};

Announcement.propTypes = {
  className: PropTypes.string,
};

export default Announcement;
