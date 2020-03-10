import React, { useEffect, useRef, useState } from 'react';
import ToggleButton from './ToggleButton';
import NotificationsPopover from './Popover';
import { data } from './data';

const Notification = () => {
  const notificationsRef = useRef(null);
  const [notifications, setNotifications] = useState([]);
  const [openNotifications, setOpenNotifications] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchNotifications = () => {
      if (mounted) {
        setNotifications(data);
      }
    };

    fetchNotifications();

    return () => {
      mounted = false;
    };
  }, []);

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  return (
    <React.Fragment>
      <ToggleButton
        notificationsRef={notificationsRef}
        onClick={handleNotificationsOpen}
        notifications={notifications}
      />
      <NotificationsPopover
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      />
    </React.Fragment>
  );
};

export default Notification;
