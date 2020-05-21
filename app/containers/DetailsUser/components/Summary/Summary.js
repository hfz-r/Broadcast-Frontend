import React from 'react';
import PropTypes from 'prop-types';
import { FormSection, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { OtherActions, SendEmails, UserInfo, UserRoles } from './components';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Summary = props => {
  const {
    invalid,
    pristine,
    submitting,
    reset,
    handleSubmit,
    formActions,
    profileActions,
    ...rest
  } = props;
  const { user } = rest;

  const formProps = {
    formActions,
    profileActions,
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid className={classes.root} container spacing={3}>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <FormSection name="userInfo">
              <UserInfo user={user} {...formProps} />
            </FormSection>
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <FormSection name="userRole">
              <UserRoles user={user} {...formProps} />
            </FormSection>
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <SendEmails user={user} {...formProps} />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <OtherActions user={user} {...formProps} />
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

Summary.propTypes = {
  user: PropTypes.object.isRequired,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
  handleSubmit: PropTypes.func,
  formActions: PropTypes.object,
  profileActions: PropTypes.object,
};

export default reduxForm({
  form: 'userMgmt',
  destroyOnUnmount: false,
})(Summary);
