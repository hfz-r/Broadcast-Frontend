import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    padding: '25px 30px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
}));

const ModalBody = props => {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.root} {...rest}>
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node,
};

export default ModalBody;
