import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles(theme => ({
  toggleButton: {
    marginLeft: theme.spacing(1),
  },
  buttonText: {
    margin: '0px 4px 0px 8px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

const ToggleButton = props => {
  const { selectorRef, language, ...rest } = props;
  const classes = useStyles();

  return (
    <Button
      {...rest}
      className={classes.toggleButton}
      color="inherit"
      ref={selectorRef}
    >
      <TranslateIcon />
      <span className={classes.buttonText}>{language}</span>
      <ArrowDownIcon />
    </Button>
  );
};

ToggleButton.propTypes = {
  selectorRef: PropTypes.object,
  language: PropTypes.string,
};

export default ToggleButton;
