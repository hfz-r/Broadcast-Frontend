import uuid from 'uuid/v1';
import moment from 'moment';

export const data = [
  {
    id: uuid(),
    title: 'New user is registered',
    type: 'user',
    created_at: moment().subtract(1, 'day'),
  },
  {
    id: uuid(),
    title: 'Project has been added',
    type: 'project',
    created_at: moment().subtract(3, 'days'),
  },
  {
    id: uuid(),
    title: 'New feature has been added',
    type: 'feature',
    created_at: moment().subtract(7, 'days'),
  },
];
