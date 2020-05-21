import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Typography, colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/CloseOutlined';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '20px 30px',
    boxSizing: 'border-box',
    borderBottom: `1px solid ${colors.grey[100]}`,
    justifyContent: props => (props.center ? 'center' : 'space-between'),
    paddingLeft: props => `${props.paddingHorizontal}!important`,
    paddingRight: props => `${props.paddingHorizontal}!important`,
    '& > :first-child': {
      marginRight: 10,
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

const ModalHeader = props => {
  const { closeButton, onClose, icon: Icon, children, ...rest } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root} {...rest}>
      <div className={classes.header}>
        {Icon && (
          <span className={classes.icon}>
            <Icon color="action" />
          </span>
        )}
        <Typography component="h2" gutterBottom variant="h3">
          {children}
        </Typography>
      </div>
      {closeButton && (
        <IconButton color="inherit" key="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </div>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.node,
  closeButton: PropTypes.bool,
  onClose: PropTypes.func,
  icon: PropTypes.object,
};

ModalHeader.defaultProps = {
  closeButton: true,
};

export default ModalHeader;
