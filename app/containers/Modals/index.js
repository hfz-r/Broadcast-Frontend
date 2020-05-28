import React from 'react';
import AddProject from './AddProject';
import AddUser from './AddUser';
import EditProject from './EditProject';
import AutoDisconnection from './AutoDisconnection';

const Modals = () => (
  <div>
    <AddProject />
    <AddUser />
    <EditProject />
    <AutoDisconnection disableOutsideClose />
  </div>
);

export default Modals;
