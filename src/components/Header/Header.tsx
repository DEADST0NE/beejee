import { Layout } from 'antd';

import Account from './Account';

import './Header.scss';

const Header = () => {
  return (
    <Layout.Header className="header site-layout-background">
      <div className="logo">
        <span>TODO</span>
      </div>
      <Account />
    </Layout.Header>
  );
};

export default Header;
