import React from 'react';
import { CAlert } from '@coreui/react';
import PropTypes from 'prop-types';

const Notifications = ({ notifications, removeNotification }) => {
  return (
    <div className="notifications">
      {notifications.map((notification, index) => (
        <CAlert
          key={index}
          color={notification.type}
          closeButton
          onClick={() => removeNotification(index)}
        >
          {notification.message}
        </CAlert>
      ))}
    </div>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  removeNotification: PropTypes.func.isRequired,
};

export default Notifications;
