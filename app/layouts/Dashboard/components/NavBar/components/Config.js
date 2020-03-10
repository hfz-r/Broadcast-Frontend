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
        href: '/dashboard',
        icon: DashboardIcon,
      },
      {
        title: 'Announcement',
        href: '/announcement',
        icon: AddAlertOutlinedIcon,
        children: [
          {
            title: 'Browse',
            href: '/announcement/browse',
          },
          {
            title: 'Create',
            href: '/announcement/create',
          },
          {
            title: 'Overview',
            href: '/announcement/overview',
          },
        ],
      },

      {
        title: 'Inbox',
        href: '/inbox',
        icon: MailIcon,
        label: () => (
          <Label color={colors.red[500]} shape="rounded">
            2
          </Label>
        ),
      },
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
            title: 'Timeline',
            href: '/profile/1/timeline',
          },
          {
            title: 'Connections',
            href: '/profile/1/connections',
          },
          {
            title: 'Projects',
            href: '/profile/1/projects',
          },
          {
            title: 'Reviews',
            href: '/profile/1/reviews',
          },
        ],
      },
      {
        title: 'Settings',
        href: '/settings',
        icon: SettingsIcon,
        children: [
          {
            title: 'General',
            href: '/settings/general',
          },
          {
            title: 'Subscription',
            href: '/settings/subscription',
          },
          {
            title: 'Notifications',
            href: '/settings/notifications',
          },
          {
            title: 'Security',
            href: '/settings/security',
          },
        ],
      },
    ],
  },
];
