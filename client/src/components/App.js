import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import TriggerModal from './TriggerModal';
import TodoContainer from './Todos';
import AuthForm from './AuthForm';
import { Layout } from 'antd';
import { COMMANDS } from '../constants';

const { SIGN_IN, REGISTER } = COMMANDS;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={TodoContainer} />
            <Redirect from="/home" to="/" />
            <Route
              path="/signin"
              render={() => <AuthForm command={SIGN_IN} />}
            />
            <Route
              path="/register"
              render={() => <AuthForm command={REGISTER} />}
            />
          </Switch>
        </Content>
        <Content />
        <Footer />
        <TriggerModal />
      </Layout>
    );
  }
}

export default App;
