import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { FormHelperText, Typography, Radio, colors } from '@material-ui/core';
import { options } from './options';

const useStyles = makeStyles(theme => ({
  option: {
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    maxWidth: 560,
    '& + &': {
      marginTop: theme.spacing(2),
    },
  },
  selectedOption: {
    backgroundColor: colors.grey[50],
  },
  invalidOption: {
    borderRadius: 4,
    borderColor: '#e53935',
  },
  alert: {
    color: '#e53935',
  },
  optionRadio: {
    margin: -10,
  },
  optionDetails: {
    marginLeft: theme.spacing(2),
  },
}));

const RenderOptions = props => {
  const {
    input,
    meta: { touched, error },
    ...rest
  } = props;

  const classes = useStyles();

  const handleChange = (event, option) => {
    input.onChange(option.value);
  };

  return (
    <React.Fragment>
      {options.map(option => (
        <div
          className={clsx(
            classes.option,
            {
              [classes.selectedOption]: input.value === option.value,
            },
            {
              [classes.invalidOption]: touched && error,
            },
          )}
          key={option.value}
        >
          <Radio
            {...rest}
            checked={input.value === option.value}
            className={classes.optionRadio}
            color="primary"
            onClick={event => handleChange(event, option)}
          />
          <div className={classes.optionDetails}>
            <Typography gutterBottom variant="h5">
              {option.title}
            </Typography>
            <Typography variant="body1">{option.description}</Typography>
          </div>
        </div>
      ))}
      <FormHelperText className={classes.alert} variant="outlined">
        {touched && error}
      </FormHelperText>
    </React.Fragment>
  );
};

RenderOptions.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default RenderOptions;
