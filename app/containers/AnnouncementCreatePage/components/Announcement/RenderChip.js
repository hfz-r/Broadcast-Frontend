import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export const RenderChip = ({ input, onRemoveTag }) => (
  <Chip
    deleteIcon={<CloseIcon />}
    label={input.value}
    onDelete={onRemoveTag}
    {...input}
  />
);

RenderChip.propTypes = {
  onRemoveTag: PropTypes.func,
  input: PropTypes.object,
};
