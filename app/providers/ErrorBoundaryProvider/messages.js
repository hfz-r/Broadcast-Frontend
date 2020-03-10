import { defineMessages } from 'react-intl';

export const scope = 'app.provider.ErrorBoundaryProvider';

export default defineMessages({
  header: {
    id: `${scope}.error.header`,
    defaultMessage: '500: Ooops, something went terribly wrong!',
  },
  continueButton: {
    id: `${scope}.error.continue.button`,
    defaultMessage: 'Continue',
  },
});
