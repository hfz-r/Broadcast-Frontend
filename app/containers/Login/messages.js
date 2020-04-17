import { defineMessages } from 'react-intl';

export const scope = 'container.Login';

export default defineMessages({
  loginButton: {
    id: `${scope}.button.login`,
    defaultMessage: 'Sign in',
  },
  /* form-helper section */
  required: {
    id: `${scope}.formhelper.required`,
    defaultMessage: 'Required',
  },
});
