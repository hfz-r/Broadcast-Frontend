import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';

export const data = [
  {
    id: uuid(),
    title: 'Mella Full Screen Slider',
    author: {
      name: 'Anje Keizer',
      avatar: 'https://i.pravatar.cc/100?img=69',
    },
    project: 'MPS',
    location: 'HSB',
    tags: [
      {
        text: 'alert',
        color: colors.red[600],
      },
      {
        text: 'warning',
        color: colors.yellow[600],
      },
    ],
    start_date: moment(),
    end_date: moment(),
    updated_at: moment().subtract(24, 'minutes'),
  },
  {
    id: uuid(),
    title: 'Dashboard Design',
    author: {
      name: 'Emi Chenko',
      avatar: 'https://i.pravatar.cc/100?img=48',
    },
    project: 'ACMS',
    location: 'NGC',
    tags: [
      {
        text: 'new',
        color: colors.grey[600],
      },
    ],
    start_date: moment(),
    end_date: moment(),
    updated_at: moment().subtract(1, 'hour'),
  },
  {
    id: uuid(),
    title: 'Ten80 Web Design',
    author: {
      name: 'Min Siam',
      avatar: 'https://i.pravatar.cc/100?img=18',
    },
    project: 'E-Floor',
    location: 'NGC',
    tags: [
      {
        text: 'info',
        color: colors.indigo[600],
      },
    ],
    liked: 'true',
    start_date: moment(),
    end_date: moment(),
    updated_at: moment().subtract(16, 'hour'),
  },
  {
    id: uuid(),
    title: 'Neura e-commerce UI Kit',
    author: {
      name: 'Shen Zhi',
      avatar: 'https://i.pravatar.cc/100?img=34',
    },
    project: 'SCM',
    location: 'HSB',
    tags: [
      {
        text: 'hold',
        color: colors.green[600],
      },
      {
        text: 'alert',
        color: colors.red[600],
      },
      {
        text: 'warning',
        color: colors.yellow[600],
      },
    ],
    start_date: moment(),
    end_date: moment(),
    updated_at: moment().subtract(3, 'days'),
  },
  {
    id: uuid(),
    title: 'Administrator Dashboard',
    author: {
      name: 'Cao Yu',
      avatar: 'https://i.pravatar.cc/100?img=8',
    },
    project: 'MPS',
    location: 'HSB',
    tags: [
      {
        text: 'alert',
        color: colors.red[600],
      },
      {
        text: 'new',
        color: colors.grey[600],
      },
    ],
    start_date: moment(),
    end_date: moment(),
    updated_at: moment().subtract(7, 'days'),
  },
  {
    id: uuid(),
    title: 'Kalli UI Kit',
    author: {
      name: 'Anje Keizer',
      avatar: 'https://i.pravatar.cc/100?img=10',
    },
    project: 'SCM',
    location: 'NGC',
    tags: [
      {
        text: 'hold',
        color: colors.green[600],
      },
    ],
    start_date: moment(),
    end_date: moment(),
    updated_at: moment().subtract(8, 'days'),
  },
];
