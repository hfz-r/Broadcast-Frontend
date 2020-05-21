import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#00000080',
    zIndex: '1040',
    display: props => (props.total === props.position ? 'flex' : 'none'),
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      overflowY: 'auto',
    },
  },
  modal: {
    position: 'absolute',
    width: '100%',
    marginTop: 60,
    zIndex: '1040',
    backgroundColor: theme.palette.white,
    boxShadow: 'none',
    borderRadius: 8,
    display: props => (props.total === props.position ? 'block' : 'none'),
    [theme.breakpoints.up('sm')]: {
      width: props => selectWidth(props.size, props.position),
      marginTop: 'initial',
      boxShadow: '0 5px 15px #00000080',
      overflowY: 'auto',
    },
  },
}));

const selectWidth = size => {
  switch (size) {
    case 'auto':
      return 'auto';
    case 'xsmall':
      return '320px';
    case 'small':
      return '400px';
    case 'medium':
      return '480px';
    case 'large':
      return '600px';
    case 'xlarge':
      return '800px';
    default:
      return '1000px';
  }
};

const Modal = props => {
  const { children, size, position, total, ...rest } = props;
  const classes = useStyles(props);

  return (
    <div className={clsx(classes.background, rest.class)} position={position}>
      <div className={classes.modal} position={position} {...rest}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  position: PropTypes.number,
  total: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', '']),
};

Modal.defaultProps = {
  size: 'medium',
};

export default Modal;
