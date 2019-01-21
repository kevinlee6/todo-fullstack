import React from "react";
import HeaderTitle from "./HeaderTitle";
import AuthButtons from "./AuthButtons";
import { Layout, Menu } from "antd";
import "./Header.css";

const Header = () => (
  <Layout.Header className="header">
    <HeaderTitle />
    <Menu theme="dark" mode="horizontal">
      <Menu.Item>
        <AuthButtons />
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default Header;
