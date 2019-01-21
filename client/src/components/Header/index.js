import React from 'react';
import Sidebar from './Sidebar';
import HeaderTitle from './HeaderTitle';
import AuthButtons from './AuthButtons';
import { Layout, Menu as AntdMenu } from 'antd';
import styled from 'styled-components';

const Header = styled(Layout.Header)`
  padding-left: 20px !important;
  display: flex;
  align-items: center;
`;

const Menu = styled(AntdMenu)`
  flex-grow: 5;
  display: flex;
  justify-content: flex-end;
`;

export default () => (
  <Header>
    <Sidebar />
    <HeaderTitle />
    <Menu theme="dark" mode="horizontal">
      <Menu.Item />
    </Menu>
    <AuthButtons />
  </Header>
);
