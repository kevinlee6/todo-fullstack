import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoListContainer from './components/TodoListContainer';
import ModalWrapper from './components/ModalWrapper';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    const { visible } = this.props;
    return (
      <div className="App">
        <Header />
        <Content style={{ padding: '50px' }}>
          <TodoListContainer />
        </Content>
        <Footer />
        {visible ? <ModalWrapper /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { modal } = state;
  const { visible } = modal;
  return { visible };
};

export default connect(mapStateToProps)(App);
