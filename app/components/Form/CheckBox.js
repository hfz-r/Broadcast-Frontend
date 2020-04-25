import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox } from '@material-ui/core';

export const RenderCheckbox = ({ input, label, ...custom }) => (
  <React.Fragment>
    <FormControlLabel
      control={<Checkbox checked={!!input.value} {...input} {...custom} />}
      label={label}
    />
  </React.Fragment>
);

RenderCheckbox.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
};
