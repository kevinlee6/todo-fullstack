import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { urlFriendly } from '../../helper';
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

const listData = ['Home', 'Sign in', 'Register'];

const StyledLink = styled(Link)`
  font-size: 1.6em;
`;

const DrawerList = ({ closeDrawer }) => (
  <List
    dataSource={listData}
    renderItem={item => (
      <List.Item>
        <StyledLink onClick={closeDrawer} to={`/${urlFriendly(item)}`}>
          {item}
        </StyledLink>
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
          title={<h2>Hello</h2>}
          placement="left"
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <DrawerList closeDrawer={this.onClose} />
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
