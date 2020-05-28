import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: '20px 30px',
    boxSizing: 'border-box',
    [theme.breakpoints.up('sm')]: {
      borderBottom: `1px solid ${colors.grey[100]}`,
    },
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: props => selectAlignment(props.align),
  },
}));

const selectAlignment = align => {
  switch (align) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'spaced':
      return 'space-between';
    default:
      return '';
  }
};

const ModalFooter = props => {
  const { align, children, ...rest } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root} {...rest}>
      <div className={classes.footer}>{children}</div>
    </div>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'right', 'center', 'spaced']),
};

ModalFooter.defaultProps = {
  align: 'left',
};

export default ModalFooter;
