/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    fontFamily:
      '"Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto","Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue"," sans-serif"',
    fontSize: props => props.size,
    fontWeight: props => props.weight,
    color: props => props.color,
    textTransform: props =>
      props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: props => props.color,
    },
    '&:focus': {
      textDecoration: 'none',
    },
  },
}));

const Link = props => {
  const { children, className, ...rest } = props;
  const classes = useStyles(props);

  return (
    <a className={classes.root} {...rest}>
      {children}
    </a>
  );
};

Link.propTypes = {
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
  size: PropTypes.string,
  color: PropTypes.string,
  uppercase: PropTypes.string,
  capitalize: PropTypes.string,
  bold: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Link.defaultProps = {
  weight: 500,
  size: '16px',
  color: 'black',
  uppercase: 'false',
  capitalize: 'false',
  bold: 'false',
};

export default Link;
