import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';

export const data = {
  title: 'Failed to Simulate Bug#7188',
  author: {
    name: 'Emilee Simchenko',
    avatar: 'https://i.pravatar.cc/100?img=48',
    bio: 'Admin',
  },
  body: `
#### TL;DR

The primary aim of the product is to convert survery responses into PDF reports, these reports are generated on to what we call templates. This product is designer to work with 3rd party survery providers. The first MVP will integrate with TypeForm, because the's no direct way to convert results to PDF from the form people create in TypeForm and then ask users to fill out.

#### Background information

Design files are attachedin the files tab.

Develop the web app screens for our product called "PDFace". Please look at the wireframes, system activity workflow and read the section above to understand what we're trying to archive.

There's not many screens we need designed, but there will be modals and various other system triggered evenets that will need to be considered.

The project has benn created in Sketch so let me know if there are any problmes opening this project and I'll try to convert into a usable file.

I have attached a chat with our users most used devices.

#### Goals:
  - Maintainable Code
  - Easy UX
  - Readable Code
  - No Redux
      `,
  project: 'ACMS',
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
  members: [
    {
      id: uuid(),
      name: 'Ekaterina Tankova',
      avatar: 'https://i.pravatar.cc/100?img=18',
      bio: 'Planner',
    },
    {
      id: uuid(),
      name: 'Cao Yu',
      avatar: 'https://i.pravatar.cc/100?img=34',
      bio: 'Designer',
    },
    {
      id: uuid(),
      name: 'Anje Keizer',
      avatar: 'https://i.pravatar.cc/100?img=10',
      bio: 'Engineer',
    },
  ],
  files: [
    {
      id: uuid(),
      name: 'image-placeholder-1.png',
      url: 'https://picsum.photos/id/2/200',
      mimeType: 'image/png',
      size: 1024 * 1024 * 3,
    },
    {
      id: uuid(),
      name: 'docs.zip',
      url: '#',
      mimeType: 'application/zip',
      size: 1024 * 1024 * 25,
    },
    {
      id: uuid(),
      name: 'image-placeholder-2.png',
      url: 'https://picsum.photos/id/4/200',
      mimeType: 'image/png',
      size: 1024 * 1024 * 2,
    },
  ],
  activities: [
    {
      id: uuid(),
      subject: 'Emilee Simchenko',
      subject_type: 'user',
      action_type: 'uploaded',
      action_desc: 'has uploaded a new file',
      created_at: moment().subtract(23, 'minutes'),
    },
    {
      id: uuid(),
      subject: 'Adrian Stefan',
      subject_type: 'user',
      action_type: 'liked',
      action_desc: 'like this',
      created_at: moment().subtract(2, 'hours'),
    },
    {
      id: uuid(),
      subject: 'Alexandru Robert',
      action_type: 'liked',
      action_desc: 'like this',
      created_at: moment().subtract(9, 'hours'),
    },
    {
      id: uuid(),
      subject: 'Emilee Simchenko',
      subject_type: 'user',
      action_type: 'updated',
      action_desc: 'updated the body',
      created_at: moment().subtract(2, 'days'),
    },
    {
      id: uuid(),
      subject: 'Announcement',
      subject_type: 'announcement',
      action_type: 'created',
      action_desc: 'created',
      created_at: moment().subtract(4, 'days'),
    },
  ],
  subscribers: [
    {
      id: uuid(),
      name: 'Ekaterina Tankova',
      avatar: 'https://i.pravatar.cc/100?img=18',
      cover: 'https://picsum.photos/id/6/200',
      common_connections: 12,
      labels: ['MPS', 'Operation', 'holiday', 'bug#923'],
    },
    {
      id: uuid(),
      name: 'Cao Yu',
      avatar: 'https://i.pravatar.cc/100?img=34',
      cover: 'https://picsum.photos/id/8/200',
      common_connections: 5,
      labels: ['ui', 'ACMS-live', 'stress-test', 'Operation'],
    },
    {
      id: uuid(),
      name: 'Clarke Gillebert',
      avatar: 'https://i.pravatar.cc/100?img=8',
      cover: 'https://picsum.photos/id/10/200',
      common_connections: 17,
      labels: ['backlogs', 'SQL', 'frontend', 'MPS'],
    },
  ],
  end_date: moment().add(7, 'days'),
  updated_at: moment().subtract(23, 'minutes'),
};
