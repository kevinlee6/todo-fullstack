import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import HeaderTitle from './components/HeaderTitle';
import TodoListContainer from './components/TodoListContainer';
import TodoModal from './components/TodoModal';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    const { visible } = this.props;
    return (
      <div className="App">
        <Header>
          <HeaderTitle />
        </Header>
        <Content style={{ padding: '50px' }}>
          <TodoListContainer />
        </Content>
        <Footer />
        {visible ? <TodoModal /> : null}
      </div>
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
