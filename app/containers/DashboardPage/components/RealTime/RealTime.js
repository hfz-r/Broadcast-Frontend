import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import gradients from 'utils/gradients';
import { Chart } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: gradients.indigo,
    color: theme.palette.primary.contrastText,
  },
  content: {
    paddingTop: 0,
  },
  itemDivider: {
    borderBottomColor: 'rgba(255,255,255,0.2)',
  },
  actions: {
    paddingTop: 0,
    justifyContent: 'flex-end',
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const getRandomInt = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

const RealTime = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [data, setData] = useState([
    163,
    166,
    161,
    159,
    99,
    163,
    173,
    166,
    167,
    183,
    176,
    172,
  ]);

  useEffect(() => {
    let mounted = true;

    setInterval(() => {
      if (mounted) {
        setData(d => {
          const newData = [...d];

          newData.shift();
          newData.push(0);

          return newData;
        });
      }

      setTimeout(() => {
        if (mounted) {
          setData(d => {
            const newData = [...d];
            const random = getRandomInt(100, 200);

            newData.pop();
            newData.push(random);

            return newData;
          });
        }
      }, 500);
    }, 2000);

    return () => {
      mounted = false;
    };
  }, []);

  const labels = data.map((value, i) => i);

  const pages = [
    {
      pathname: 'acms',
      views: '24',
    },
    {
      pathname: 'mps',
      views: '21',
    },
    {
      pathname: 'e-floor',
      views: '15',
    },
    {
      pathname: 'scm',
      views: '8',
    },
  ];

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        action={
          <Typography color="inherit" gutterBottom variant="h3">
            {data[data.length - 1] === 0
              ? data[data.length - 2]
              : data[data.length - 1]}
          </Typography>
        }
        subheader="Page views per second"
        subheaderTypographyProps={{ color: 'inherit' }}
        title="Active users"
        titleTypographyProps={{ color: 'inherit' }}
      />
      <CardContent className={classes.content}>
        <Chart data={data} labels={labels} />
        <List>
          {pages.map(page => (
            <ListItem
              classes={{ divider: classes.itemDivider }}
              divider
              key={page.pathname}
            >
              <ListItemText
                primary={page.pathname}
                primaryTypographyProps={{ color: 'inherit', variant: 'body1' }}
              />
              <Typography color="inherit">{page.views}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          color="inherit"
          component={RouterLink}
          size="small"
          to="#"
          variant="text"
        >
          See all
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </Button>
      </CardActions>
    </Card>
  );
};

RealTime.propTypes = {
  className: PropTypes.string,
};

export default RealTime;
