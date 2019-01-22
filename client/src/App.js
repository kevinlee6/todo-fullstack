import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ModalWrapper from './components/ModalWrapper';
import { Layout } from 'antd';
import './App.css';

class App extends Component {
  render() {
    const { visible } = this.props;
    return (
      <Layout className="layout">
        <Header />
        <Content />
        <Footer />
        {visible ? <ModalWrapper /> : null}
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
