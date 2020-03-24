/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: 8,
    width: props => props.width,
    height: props => props.height,
    backgroundColor: props => props.bgColor,
  },
});

const SkeletonRectangle = props => {
  const classes = useStyles(props);
  return <div className={classes.root}>{props.children}</div>;
};

SkeletonRectangle.defaultProps = {
  bgColor: '#eeeeee',
};

SkeletonRectangle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node,
};

export default SkeletonRectangle;
