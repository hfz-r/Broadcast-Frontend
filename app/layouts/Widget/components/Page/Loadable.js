import React from 'react';
import loadable from 'utils/loadable';
import { LinearProgress } from '@material-ui/core';

export default loadable(() => import('./Page'), {
  fallback: <LinearProgress />,
});
