import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.white,
    backgroundColor: theme.palette.primary.main,
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
  avatar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
    height: 48,
    width: 48,
  },
}));

const Topic = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const data = {
    title: 'Title',
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography
          color="inherit"
          component="h3"
          gutterBottom
          variant="overline"
        >
          Hot Topic
        </Typography>
        <div className={classes.details}>
          <Typography color="inherit" variant="h3">
            {data.title}
          </Typography>
        </div>
      </div>
      <Avatar className={classes.avatar} color="inherit">
        <WhatshotIcon />
      </Avatar>
    </Card>
  );
};

Topic.propTypes = {
  className: PropTypes.string,
};

export default Topic;
