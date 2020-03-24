import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, colors } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { Label } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  label: {
    marginTop: theme.spacing(1),
  },
  shareButton: {
    marginRight: theme.spacing(2),
  },
  shareIcon: {
    marginRight: theme.spacing(1),
  },
  applyButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

const Header = props => {
  const { announcement, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Browse announcements
          </Typography>
          <Typography component="h1" gutterBottom variant="h3">
            {announcement.title}
          </Typography>
          <Label
            className={classes.label}
            color={colors.green[600]}
            variant="outlined"
          >
            New announcement
          </Label>
        </Grid>
        <Grid item>
          <Button className={classes.shareButton} variant="contained">
            <ShareIcon className={classes.shareIcon} />
            Share
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  announcement: PropTypes.object.isRequired,
};

export default Header;
