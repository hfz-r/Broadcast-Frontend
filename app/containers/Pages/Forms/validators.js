import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const required = value =>
  value ? undefined : <FormattedMessage {...messages.required} />;
