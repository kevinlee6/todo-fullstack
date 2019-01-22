import React, { Component } from 'react';
import { Drawer, Icon as AntdIcon, List } from 'antd';
import styled from 'styled-components';

const Icon = styled(AntdIcon)`
  color: white;
  font-size: 1.6em;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media (max-width: 576px) {
    margin-right: 15px;
  }
`;

const listData = ['Sign in', 'Register'];

const A = styled.a`
  font-size: 1.6em;
`;

const DrawerList = () => (
  <List
    dataSource={listData}
    renderItem={item => (
      <List.Item>
        <A>{item}</A>
      </List.Item>
    )}
  />
);

class Sidebar extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({ visible: true });
  };

  onClose = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        <Icon
          className="sidebar-icon"
          type="menu-unfold"
          onClick={this.showDrawer}
        />
        <Drawer
          title="Menu"
          placement="left"
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <DrawerList />
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
