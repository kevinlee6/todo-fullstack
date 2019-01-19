import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TodoListContainer from './components/TodoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
