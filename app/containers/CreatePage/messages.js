import { defineMessages } from 'react-intl';

export const scope = 'container.AnnouncementCreate';

export default defineMessages({
  buttonClear: {
    id: `${scope}.button.clear`,
    defaultMessage: 'Clear',
  },
  buttonCreateAnnouncement: {
    id: `${scope}.button.createannouncement`,
    defaultMessage: 'Create announcement',
  },
  /* form-helper section */
  required: {
    id: `${scope}.formhelper.required`,
    defaultMessage: 'Required',
  },
});
