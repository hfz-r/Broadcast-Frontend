import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Field, formValueSelector } from 'redux-form';
import {
  FormControl,
  FormGroup,
  FormHelperText,
  Typography,
} from '@material-ui/core';
import { RenderCheckbox } from '../Preferences/RenderCheckbox';
import { location } from './options';

const formName = 'createProject';
const formSection = 'projectSelector';

const useStyles = makeStyles(theme => ({
  root: {
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    maxWidth: 560,
  },
  invalidOption: {
    borderRadius: 4,
    borderColor: '#e53935',
  },
  alert: {
    color: '#e53935',
  },
}));

const Location = ({ label, onLocationError, ...rest }) => {
  const classes = useStyles();

  const { ngc, hsb, pj } = rest;
  const isRequired = [ngc, hsb, pj].filter(v => v).length === 0;

  useEffect(() => onLocationError(isRequired), [isRequired]);

  return (
    <React.Fragment>
      <div
        className={clsx(classes.root, {
          [classes.invalidOption]: isRequired,
        })}
      >
        <FormControl required error={isRequired} component="fieldset">
          <Typography gutterBottom variant="h6">
            {label}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </Typography>
          <FormGroup row>
            {location.map(loc => (
              <Field
                key={loc}
                name={loc}
                label={loc}
                component={RenderCheckbox}
                color="primary"
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
      <FormHelperText className={classes.alert} variant="outlined">
        {isRequired && 'Required'}
      </FormHelperText>
    </React.Fragment>
  );
};

Location.propTypes = {
  label: PropTypes.string,
  onLocationError: PropTypes.func,
};

const selector = formValueSelector(formName);

export default connect(state => ({
  ngc: selector(state, `${formSection}.NGC`),
  hsb: selector(state, `${formSection}.HSB`),
  pj: selector(state, `${formSection}.PJ`),
}))(Location);
