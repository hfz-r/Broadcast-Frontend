import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Typography,
  colors,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import getInitials from 'utils/getInitials';
import Label from 'components/Label';
import { categories } from './data';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    paddingBottom: 0,
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3),
  },
  tags: {
    padding: theme.spacing(0, 3, 1, 3),
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
  learnMoreButton: {
    marginLeft: theme.spacing(2),
  },
  likedButton: {
    color: colors.red[600],
  },
  shareButton: {
    marginLeft: theme.spacing(1),
  },
  details: {
    padding: theme.spacing(1, 3),
  },
}));

const AnnouncementCard = props => {
  const { announcement, className, ...rest } = props;

  const classes = useStyles();
  const [liked, setLiked] = useState(announcement.liked);

  const trimString = (string, length) =>
    string.length > length ? `${string.substring(0, length)}...` : string;

  const handleLike = () => {
    setLiked(true);
  };

  const handleUnlike = () => {
    setLiked(false);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        avatar={
          <Avatar alt="Author" src={announcement.author.image}>
            {getInitials(
              `${announcement.author.first_name} ${
                announcement.author.last_name
              }`,
            )}
          </Avatar>
        }
        className={classes.header}
        disableTypography
        subheader={
          <Typography variant="body2">
            by{' '}
            <Link
              color="textPrimary"
              component={RouterLink}
              to="/profile/1/timeline"
              variant="h6"
            >
              {`${announcement.author.first_name} ${
                announcement.author.last_name
              }`}
            </Link>{' '}
            | Updated: {moment(announcement.updated_at).fromNow()}
          </Typography>
        }
        title={
          <Link
            color="textPrimary"
            component={RouterLink}
            to={`/announcements/${announcement.slug}/overview`}
            variant="h5"
          >
            {announcement.projectAbout.title}
          </Link>
        }
      />
      <CardContent className={classes.content}>
        <div className={classes.description}>
          <Typography color="textSecondary" variant="subtitle2">
            {trimString(announcement.projectAbout.description, 30)}
          </Typography>
        </div>
        <div className={classes.tags}>
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
        <Divider />
        <div className={classes.details}>
          <Grid
            alignItems="center"
            container
            justify="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h5">
                {announcement.projectSelector.project.toUpperCase()}
              </Typography>
              <Typography variant="body2">Project</Typography>
            </Grid>
            <Grid item>
              {liked ? (
                <Tooltip title="Unlike">
                  <IconButton
                    className={classes.likedButton}
                    onClick={handleUnlike}
                    size="small"
                  >
                    <FavoriteIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Like">
                  <IconButton
                    className={classes.likeButton}
                    onClick={handleLike}
                    size="small"
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="Share">
                <IconButton className={classes.shareButton} size="small">
                  <ShareIcon />
                </IconButton>
              </Tooltip>
              <Button
                className={classes.learnMoreButton}
                component={RouterLink}
                size="small"
                to={`/announcements/${announcement.slug}/overview`}
              >
                Learn more
              </Button>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

AnnouncementCard.propTypes = {
  className: PropTypes.string,
  announcement: PropTypes.object.isRequired,
};

export default AnnouncementCard;
