import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { reduxForm } from 'redux-form';
import { Button, Typography } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/HelpOutlineOutlined';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'components';

const AutoDisconnection = props => {
  const { duration, position, total, ...rest } = props;
  const { handleSubmit, handleCancel } = rest;

  return (
    <Modal size="large" position={position} total={total}>
      <form onSubmit={handleSubmit}>
        <ModalHeader onClose={handleCancel} icon={HelpIcon}>
          <FormattedMessage
            id="modals.autodisconnection.title"
            defaultMessage="Are you still there?"
          />
        </ModalHeader>
        <ModalBody>
          <Typography component="h1" variant="h3" style={{ marginBottom: 5 }}>
            <FormattedMessage
              id="modals.autodisconnection.explain"
              defaultMessage="You've been inactive for {duration} minutes."
              values={{ duration }}
            />
          </Typography>
          <Typography component="h2" variant="overline" color="textSecondary">
            <FormattedMessage
              id="modals.autodisconnection.explain2"
              defaultMessage="Click 'Cancel' if you don't want to be logged out automatically."
            />
          </Typography>
        </ModalBody>
        <ModalFooter align="spaced">
          <Button variant="contained" onClick={handleCancel}>
            <FormattedMessage
              id="modals.autodisconnection.cancel"
              defaultMessage="Cancel"
            />
          </Button>
          <Button type="submit" color="primary" variant="contained">
            <FormattedMessage
              id="modals.autodisconnection.logout"
              defaultMessage="Log me out"
            />
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

AutoDisconnection.propTypes = {
  duration: PropTypes.number.isRequired,
  position: PropTypes.number,
  total: PropTypes.number,
  handleCancel: PropTypes.func,
  handleClick: PropTypes.func,
};

AutoDisconnection.defaultProps = {
  position: 1,
  total: 1,
};

export default reduxForm({ form: 'autoDisconnection' })(AutoDisconnection);
