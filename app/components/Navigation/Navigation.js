import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { NavigationList } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

const Navigation = props => {
  const {
    title,
    pages,
    className,
    location,
    component: Component,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Component {...rest} className={clsx(classes.root, className)}>
      {title && <Typography variant="overline">{title}</Typography>}
      <NavigationList depth={0} pages={pages} location={location} />
    </Component>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  component: PropTypes.any,
  pages: PropTypes.array.isRequired,
  title: PropTypes.string,
  location: PropTypes.object,
};

Navigation.defaultProps = {
  component: 'nav',
};

export default Navigation;
