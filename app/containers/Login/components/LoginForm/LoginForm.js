import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';
import { prop } from 'ramda';
import { makeStyles } from '@material-ui/styles';
import { Button, FormHelperText, Typography } from '@material-ui/core';
import { HeartbeatLoader } from 'components';
import { RenderTextField } from 'components/Form';
import { required } from '../../validators';
import M from '../../messages';

const useStyles = makeStyles(theme => ({
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%',
    height: 56,
  },
  alert: {
    color: '#e53935',
    textAlign: 'right',
  },
}));

const LoginForm = props => {
  const {
    className,
    busy,
    invalid,
    submitting,
    loginError,
    password,
    ...rest
  } = props;
  const { handleSubmit, formActions } = rest;

  const classes = useStyles();

  const err = prop('Error', loginError);

  return (
    <React.Fragment>
      {err && (
        <FormHelperText className={classes.alert} variant="outlined">
          {err}
        </FormHelperText>
      )}
      <form className={clsx(classes.root, className)} onSubmit={handleSubmit}>
        <div className={classes.fields}>
          <Field
            name="username"
            label="Username"
            component={RenderTextField}
            err={err}
            fullWidth
            variant="outlined"
            validate={[required]}
          />
          <Field
            name="password"
            label="Password"
            component={RenderTextField}
            err={err}
            fullWidth
            variant="outlined"
            type="password"
            validate={[required]}
          />
        </div>
        <Button
          color="primary"
          className={classes.submitButton}
          disabled={invalid || submitting || busy || !password}
          onClick={() => formActions.submit('login')}
          size="large"
          type="submit"
          variant="contained"
        >
          {busy && !loginError ? (
            <HeartbeatLoader height="20px" width="20px" color="white" />
          ) : (
            <FormattedMessage {...M.loginButton} />
          )}
        </Button>
      </form>
    </React.Fragment>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  busy: PropTypes.bool,
  password: PropTypes.string,
  loginError: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleSubmit: PropTypes.func,
  formActions: PropTypes.object,
};

export default LoginForm;
