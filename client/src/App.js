import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import TodoListContainer from "./components/TodoListContainer";
import TodoModal from "./components/TodoModal";
import { Layout } from "antd";
import Header from "./components/Header";

const { Content, Footer } = Layout;

class App extends Component {
  render() {
    const { visible } = this.props;
    return (
      <Layout className="layout">
        <Header className="header" />
        <Content style={{ padding: "50px" }}>
          <TodoListContainer />
        </Content>
        <Footer />
        {visible ? <TodoModal /> : null}
      </Layout>
    );
  }
}

// Need to get modal visibility from store to conditionally render the modal
// for lifecycle method componentDidMount functionality
const mapStateToProps = state => {
  const { modal } = state;
  const { visible } = modal;
  return { visible };
};

export default connect(mapStateToProps)(App);
