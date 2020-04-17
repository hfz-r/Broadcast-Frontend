import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, colors } from '@material-ui/core';
import { Share } from '@material-ui/icons';
import { Label } from 'components';
import { Breadcrumb } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  label: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(0, 0, 1, 0),
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
  shareButton: {
    marginRight: theme.spacing(2),
  },
  shareIcon: {
    marginRight: theme.spacing(1),
  },
  editButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

const categories = [
  {
    text: 'Warning',
    color: colors.orange[900],
  },
  {
    text: 'Error',
    color: colors.red[600],
  },
  {
    text: 'Info',
    color: colors.lightBlue[600],
  },
  {
    text: 'Others',
    color: colors.grey[600],
  },
];

const Header = props => {
  const { announcement, announcementCount, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Breadcrumb
            page={announcement.message_id}
            totalPage={announcementCount}
          />
          <Typography component="h1" gutterBottom variant="h3">
            {announcement.projectAbout.title}
          </Typography>
          <div className={classes.label}>
            {announcement.projectAbout.category.map(value =>
              Object.values(categories).map(cat => {
                if (cat.text === value) {
                  return (
                    <Label key={cat.text} color={cat.color}>
                      {cat.text}
                    </Label>
                  );
                }
                return null;
              }),
            )}
          </div>
        </Grid>
        <Grid item>
          <Button className={classes.shareButton} variant="contained">
            <Share className={classes.shareIcon} />
            Share
          </Button>
          <Button className={classes.editButton} variant="contained">
            Edit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  announcement: PropTypes.object.isRequired,
  announcementCount: PropTypes.number,
};

export default Header;
