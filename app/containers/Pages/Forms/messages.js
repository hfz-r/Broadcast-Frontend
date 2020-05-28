import { defineMessages } from 'react-intl';

export const scope = 'container.AnnouncementPage';

export default defineMessages({
  buttonClear: {
    id: `${scope}.button.clear`,
    defaultMessage: 'Clear',
  },
  buttonCreateAnnouncement: {
    id: `${scope}.button.createannouncement`,
    defaultMessage: 'Create announcement',
  },
  buttonEditAnnouncement: {
    id: `${scope}.button.editannouncement`,
    defaultMessage: 'Edit announcement',
  },
  /* form-helper section */
  required: {
    id: `${scope}.formhelper.required`,
    defaultMessage: 'Required',
  },
});
