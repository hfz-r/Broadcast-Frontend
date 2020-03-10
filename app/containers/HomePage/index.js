import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Page } from 'components';
import messages from './messages';

export default function HomePage() {
  return (
    <Page title="Home Page">
      <h1 style={{ margin: '10px' }}>
        <FormattedMessage {...messages.header} />
      </h1>
    </Page>
  );
}
