import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from '@material-ui/pickers';

export const RenderDatePicker = ({ label, input, ...custom }) => (
  <KeyboardDatePicker
    autoOk
    variant="inline"
    inputVariant="outlined"
    label={label}
    value={input.value}
    format="DD/MM/YYYY"
    InputAdornmentProps={{ position: 'start' }}
    onChange={input.onChange}
    {...custom}
  />
);

RenderDatePicker.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
};
