import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ErrorBoundary from 'providers/ErrorBoundaryProvider';
import { Page } from './components';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  body: {
    overflowY: 'auto',
    flex: '1 1 auto',
  },
}));

const WidgetLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ErrorBoundary>
        <div className={classes.content}>
          <main className={classes.body}>
            <Page>{children}</Page>
          </main>
        </div>
      </ErrorBoundary>
    </div>
  );
};

WidgetLayout.propTypes = {
  children: PropTypes.node,
};

export default WidgetLayout;
