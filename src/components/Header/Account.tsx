import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Popover } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import storage, { JWT_KEY } from '../../storage';

const Account: FC = () => {
  const history = useNavigate();
  const isAuth = !!storage.get(JWT_KEY);

  const click = (): void => {
    if (isAuth) {
      storage.remove(JWT_KEY);
      history('/login');
    } else {
      history('/login');
    }
  };

  const content = (
    <ul className="header-menu-user">
      <li>
        <Button block onClick={click} type="text" icon={<LogoutOutlined />}>
          {isAuth ? 'Выйти' : 'Войти'}
        </Button>
      </li>
    </ul>
  );

  const titleMenuUser = isAuth ? (
    <span className="header-menu-user-title">Admin</span>
  ) : null;

  return (
    <Popover
      placement="rightBottom"
      content={content}
      title={titleMenuUser}
      trigger="click"
    >
      <Avatar size="default" style={{ backgroundColor: '#7265e6' }} />
    </Popover>
  );
};

export default Account;
