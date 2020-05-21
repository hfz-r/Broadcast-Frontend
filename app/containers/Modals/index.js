import React from 'react';
import AddProject from './AddProject';
import AutoDisconnection from './AutoDisconnection';
import EditProject from './EditProject';
import ViewPermission from './Permission';

const Modals = () => (
  <div>
    <AddProject />
    <AutoDisconnection disableOutsideClose />
    <EditProject />
    <ViewPermission />
  </div>
);

export default Modals;
