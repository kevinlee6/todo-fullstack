import React, { Component } from "react";
import { Drawer, Icon } from "antd";
import "./Sidebar.css";

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
      <div className="Sidebar">
        <Icon
          className="sidebar-icon"
          type="menu-unfold"
          onClick={this.showDrawer}
        />
        <Drawer
          title="Menu"
          closable="false"
          placement="left"
          onClose={this.onClose}
          visible={this.state.visible}
        >
          Dummy content
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
