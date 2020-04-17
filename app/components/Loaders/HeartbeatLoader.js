import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: props => props.width,
    height: props => props.height,
  },
});

const Circle1 = withStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    opacity: '0.7',
    backgroundColor: props => props.color,
    animation: '$bounceFrames 2s infinite ease-in-out',
    animationDelay: props => props.delay,
  },
  '@keyframes bounceFrames': {
    '0%, 100%': {
      transform: 'scale(0.0)',
    },
    '50%': {
      transform: 'scale(1.0)',
    },
  },
})(({ classes }) => <div className={classes.root} />);

const HeartbeatLoader = props => {
  const { color, ...rest } = props;
  const classes = useStyles(props);

  return (
    <div {...rest} className={classes.root}>
      <Circle1 color={color} />
      <Circle1 color={color} delay="-1s" />
    </div>
  );
};

HeartbeatLoader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

HeartbeatLoader.defaultProps = {
  width: '40px',
  height: '40px',
  color: 'blue',
};

export default HeartbeatLoader;
