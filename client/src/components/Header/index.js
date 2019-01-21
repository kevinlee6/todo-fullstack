import React from 'react';
import Sidebar from './Sidebar';
import HeaderTitle from './HeaderTitle';
import AuthButtons from './AuthButtons';
import { Layout, Menu } from 'antd';
import './Header.css';

const Header = () => (
  <Layout.Header className="Header">
    <Sidebar />
    <HeaderTitle />
    <Menu className="menu" theme="dark" mode="horizontal">
      <Menu.Item>
        <AuthButtons />
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default Header;
