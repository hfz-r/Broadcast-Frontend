import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import { GenericMoreButton } from 'components';
import { Chart } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {},
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginLeft: theme.spacing(1),
    },
  },
  inner: {
    height: 375,
    minWidth: 500,
  },
  chart: {
    height: '100%',
  },
}));

const Views = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const data = {
    thisWeek: {
      data: [],
      labels: [],
    },
    thisMonth: {
      data: [],
      labels: [],
    },
    thisYear: {
      data: [20, 13, 28, 18],
      labels: ['acms', 'mps', 'e-floor', 'scm'],
    },
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader action={<GenericMoreButton />} title="Views Over Time" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Chart
              className={classes.chart}
              data={data.thisYear.data}
              labels={data.thisYear.labels}
            />
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

Views.propTypes = {
  className: PropTypes.string,
};

export default Views;
