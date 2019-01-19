import React, { Component } from 'react';
import './App.css';
import TodoListContainer from './components/TodoListContainer';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content style={{ padding: '50px' }}>
          <TodoListContainer />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
