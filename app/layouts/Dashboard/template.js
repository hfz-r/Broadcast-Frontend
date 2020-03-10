import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, styled } from '@material-ui/styles';
import ErrorBoundary from 'providers/ErrorBoundaryProvider';
import { NavBar, TopBar, Page } from './components';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  topBar: {
    zIndex: 2,
    position: 'relative',
  },
  navBar: {
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: '0 0 auto',
  },
}));

const Wrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

const Content = styled('main')({
  overflowY: 'auto',
  flex: '1 1 auto',
});

const DashboardLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ErrorBoundary>
        <TopBar className={classes.topBar} />
        <Wrapper>
          <NavBar className={classes.navBar} />
          <Content>
            <Page>{children}</Page>
          </Content>
        </Wrapper>
      </ErrorBoundary>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
