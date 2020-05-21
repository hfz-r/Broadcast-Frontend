import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { FormHelperText, Typography, Radio, colors } from '@material-ui/core';

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
  publicHighlighter: {
    border: `1px dashed ${theme.palette.divider}`,
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
    payload,
    input,
    meta: { touched, error },
    ...rest
  } = props;

  const classes = useStyles();

  const handleChange = (event, option) => {
    input.onChange(option.slug);
  };

  return (
    <React.Fragment>
      {payload.map(project => (
        <div
          className={clsx(
            classes.option,
            {
              [classes.selectedOption]: input.value === project.slug,
            },
            {
              [classes.publicHighlighter]: project.slug === 'public',
            },
            {
              [classes.invalidOption]: touched && error,
            },
          )}
          key={project.slug}
        >
          <Radio
            {...rest}
            checked={input.value === project.slug}
            className={classes.optionRadio}
            color="primary"
            onClick={event => handleChange(event, project)}
          />
          <div className={classes.optionDetails}>
            <Typography gutterBottom variant="h5">
              {project.project}
            </Typography>
            <Typography variant="body1">{project.description}</Typography>
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
  payload: PropTypes.array,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default RenderOptions;
