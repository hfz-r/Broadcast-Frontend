import React from 'react';
import { colors } from '@material-ui/core';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import { Label } from 'components';

export default [
  {
    title: 'Pages',
    pages: [
      {
        title: 'Dashboard',
        href: '/home',
        icon: DashboardIcon,
      },
      {
        title: 'Announcement',
        href: '/announcements',
        icon: AddAlertOutlinedIcon,
        children: [
          {
            title: 'Create',
            href: '/announcements/create',
          },
          {
            title: 'Browse',
            href: '/announcements/browse',
          },
          // {
          //   title: 'Overview',
          //   href: '/announcements/so-failed-to-save/overview',
          // },
        ],
      },
      // {
      //   title: 'Inbox',
      //   href: '/inbox',
      //   icon: MailIcon,
      //   label: () => (
      //     <Label color={colors.red[500]} shape="rounded">
      //       2
      //     </Label>
      //   ),
      // },
    ],
  },
  {
    title: 'Settings',
    pages: [
      {
        title: 'Profile',
        href: '/profile',
        icon: PersonIcon,
        children: [
          {
            title: 'Child 1',
            href: '/profile/1/child1',
          },
          {
            title: 'Child 2',
            href: '/profile/1/child2',
          },
          // {
          //   title: 'Timeline',
          //   href: '/profile/1/timeline',
          // },
          // {
          //   title: 'Connections',
          //   href: '/profile/1/connections',
          // },
          // {
          //   title: 'Projects',
          //   href: '/profile/1/projects',
          // },
          // {
          //   title: 'Reviews',
          //   href: '/profile/1/reviews',
          // },
        ],
      },
      {
        title: 'Settings',
        href: '/settings',
        icon: SettingsIcon,
        children: [
          {
            title: 'Child 1',
            href: '/settings/child1',
          },
          {
            title: 'Child 2',
            href: '/settings/child2',
          },
          // {
          //   title: 'General',
          //   href: '/settings/general',
          // },
          // {
          //   title: 'Subscription',
          //   href: '/settings/subscription',
          // },
          // {
          //   title: 'Notifications',
          //   href: '/settings/notifications',
          // },
          // {
          //   title: 'Security',
          //   href: '/settings/security',
          // },
        ],
      },
    ],
  },
];
