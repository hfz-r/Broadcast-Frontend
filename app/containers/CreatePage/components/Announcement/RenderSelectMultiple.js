import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  Chip,
  colors,
} from '@material-ui/core';
import { Error, Warning, Info, Help } from '@material-ui/icons';

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
  others: {
    backgroundColor: colors.grey[600],
  },
  info: {
    backgroundColor: colors.lightBlue[600],
  },
  warning: {
    backgroundColor: colors.orange[900],
  },
  error: {
    backgroundColor: colors.red[600],
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

const categories = [
  {
    text: 'Warning',
    icon: <Warning />,
  },
  {
    text: 'Error',
    icon: <Error />,
  },
  {
    text: 'Info',
    icon: <Info />,
  },
  {
    text: 'Others',
    icon: <Help />,
  },
];

export const RenderSelectMultiple = ({ label, input }) => {
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
            {selected.map(value =>
              Object.values(categories).map(cat => {
                if (cat.text === value) {
                  return (
                    <Chip
                      key={value}
                      className={clsx(
                        classes.label,
                        classes[cat.text.toLowerCase()],
                      )}
                      icon={cat.icon}
                      label={cat.text}
                      color="secondary"
                    />
                  );
                }
                return null;
              }),
            )}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {categories.map(cat => (
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
};
