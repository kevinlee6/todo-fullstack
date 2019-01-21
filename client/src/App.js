import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Content from './components/Content';
import TodoModal from './components/TodoModal';
import { Layout } from 'antd';
import './App.css';
const { Footer } = Layout;

class App extends Component {
  render() {
    const { visible } = this.props;
    return (
      <Layout className="layout">
        <Header />
        <Content />
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
