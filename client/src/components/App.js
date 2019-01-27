import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import TriggerModal from "./TriggerModal";
import TodoContainer from "./Todos";
import AuthForm from "./AuthForm";
import Landing from "./Landing";
import { Layout } from "antd";
import { COMMANDS } from "../constants";
import shrinkContainer from "./hoc/shrinkContainer";
import axios from "axios";
import { Cookies } from "react-cookie";
import { signIn } from "../redux/actions";

const { SIGN_IN, REGISTER } = COMMANDS;

class App extends Component {
  async componentDidMount() {
    const { signIn } = this.props;
    const cookies = new Cookies();
    const token = cookies.get("token");
    if (token) {
      console.log(token);
      const res = await axios.post("/verify-token", null, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      // data should be an object with id key
      const data = res.data;

      // if error, then something is wrong with token, so remove it
      // this way it won't keep calling db on refresh
      const error = data.error;
      console.log(error);
      if (error) {
        cookies.remove("token");
        return;
      }

      // will set isLoggedIn to true
      signIn(token);
    }
  }

  render() {
    const { isSignedIn } = this.props;
    return (
      <Layout className="layout">
        <Header />
        <Content>
          <Switch>
            <Route
              exact
              path="/"
              component={isSignedIn ? TodoContainer : Landing}
            />
            <Redirect from="/home" to="/" />
            <Route
              path="/signin"
              render={() =>
                shrinkContainer(<AuthForm command={SIGN_IN} />, SIGN_IN)
              }
            />
            <Route
              path="/register"
              render={() =>
                shrinkContainer(<AuthForm command={REGISTER} />, REGISTER)
              }
            />
          </Switch>
        </Content>
        <Footer />
        <TriggerModal />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  const { isSignedIn } = auth;
  return { isSignedIn };
};

// use withRouter as temporary fix to get around connect PureComponent
export default withRouter(
  connect(
    mapStateToProps,
    { signIn }
  )(App)
);
