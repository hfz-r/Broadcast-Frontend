import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
} from '@material-ui/core';
import { Labeled } from 'components/Announcement';

const useStyles = makeStyles({
  labels: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  label: {
    margin: 2,
  },
  alert: {
    color: '#e53935',
  },
});

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

export const RenderSelectMultiple = ({ label, input, payload }) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="category-select-label">{label}</InputLabel>
      <Select
        {...input}
        multiple
        label={label}
        inputProps={{
          name: 'category',
          id: 'category-select-label',
        }}
        value={input.value || []}
        onChange={input.onChange}
        renderValue={selected => (
          <div className={classes.labels}>
            <Labeled
              className={classes.label}
              selected={selected}
              payload={payload}
            />
          </div>
        )}
        MenuProps={MenuProps}
      >
        {payload.map(cat => (
          <MenuItem key={cat.text} value={cat.text}>
            <Checkbox checked={input.value.indexOf(cat.text) > -1} />
            <ListItemText primary={cat.text} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

RenderSelectMultiple.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  payload: PropTypes.array,
};
