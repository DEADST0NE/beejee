import { notification } from 'antd';

import { ReactComponent as SuccessLogo } from '../../assets/icons/success-logo.svg';

import './Notification.scss';

export const openNotification = (message: string) => {
  notification.open({
    message: 'Success',
    description: message,
    icon: <SuccessLogo />,
    className: 'notification',
  });
};

export const openErrorNotification = (message: string) => {
  notification.open({
    message: 'Error',
    description: message,
    className: 'notification',
    duration: 0,
  });
};

export const openNoticeNotification = (message: string) => {
  notification.open({
    message: 'Notice',
    description: message,
    className: 'notification',
    duration: 0,
  });
};
