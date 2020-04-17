import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from '@material-ui/core/styles';
import * as C from 'utils/services/AlertService';

const BaseText = styled('div')({
  fontWeight: props => props.weight,
  fontSize: props => props.size,
  lineHeight: props => props.lineHeight,
  textTransform: props =>
    // eslint-disable-next-line no-nested-ternary
    props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none',
  fontStyle: props => (props.italic ? 'italic' : 'normal'),
  color: props => props.color,
  cursor: props => props.cursor,
  flexDirection: props => (props.flexRow ? 'row' : null),
  display: props => (props.flexRow ? 'flex' : 'block'),
  opacity: props => props.opacity,
});

const buildMessageTemplate = messageText => (
  <BaseText size="14px">{messageText}</BaseText>
);

export const getAlertContent = (message, data = undefined, handleClose, id) => {
  switch (message) {
    case C.CREATE_ANNOUNCEMENT_ERROR:
      return buildMessageTemplate(
        <FormattedMessage
          id="components.snackbar.create_announcement_error"
          defaultMessage="Failed to create announcement."
        />,
      );
    case C.CREATE_ANNOUNCEMENT_SUCCESS:
      return buildMessageTemplate(
        <FormattedMessage
          id="components.snackbar.create_announcement_success"
          defaultMessage="Announcement created successfully!"
        />,
      );
    case C.LOGIN_ERROR:
      return buildMessageTemplate(
        <FormattedMessage
          id="components.snackbar.login_error"
          defaultMessage="Failed to login."
        />,
      );
    default:
      return buildMessageTemplate(
        message || (
          <FormattedMessage
            id="components.snackbar.unknown_error"
            defaultMessage="An error has occurred"
          />
        ),
      );
  }
};
