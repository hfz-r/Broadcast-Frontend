/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: props => `${parseFloat(props.width) / 2}px`,
    width: props => props.width,
    height: props => props.height,
    backgroundColor: props => props.bgColor,
  },
});

const SkeletonCircle = props => {
  const classes = useStyles(props);
  return <div className={classes.root}>{props.children}</div>;
};

SkeletonCircle.defaultProps = {
  bgColor: '#eeeeee',
};

SkeletonCircle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node,
};

export default SkeletonCircle;
