import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from '@material-ui/core';

export const RenderSwitch = ({ input, ...custom }) => (
  <Switch checked={!!input.value} {...input} {...custom} />
);

RenderSwitch.propTypes = {
  input: PropTypes.object,
};
