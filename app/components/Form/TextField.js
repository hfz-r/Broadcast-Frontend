import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

export const RenderTextField = ({
  err,
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={!!err || (touched && invalid)}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

RenderTextField.propTypes = {
  err: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};
