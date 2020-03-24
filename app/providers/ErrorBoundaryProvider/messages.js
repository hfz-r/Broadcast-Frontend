import { defineMessages } from 'react-intl';

export const scope = 'provider.ErrorBoundaryProvider';

export default defineMessages({
  header: {
    id: `${scope}.error.header`,
    defaultMessage: '500: Ooops, something went terribly wrong!',
  },
  continueButton: {
    id: `${scope}.error.button.continue`,
    defaultMessage: 'Continue',
  },
});
