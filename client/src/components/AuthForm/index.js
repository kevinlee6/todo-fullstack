import React, { Component } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import { connect } from "react-redux";
import Username from "./Username";
import Password from "./Password";
import SignInSpecific from "./SignInSpecific";
import RegisterSpecific from "./RegisterSpecific";
import Buttons from "./Buttons";
import { COMMANDS } from "../../constants";
import { validateRegister } from "../../helper";
import { Form, message } from "antd";
import { hideModal, signIn, signOut } from "../../redux/actions";
import { history } from "../../redux/store";

const { SIGN_IN, REGISTER } = COMMANDS;

class AuthForm extends Component {
  handleSubmit = async (e, command) => {
    e.preventDefault();
    const cookies = new Cookies();
    const { form, hideModal, signIn } = this.props;
    const data = form.getFieldsValue();
    switch (command) {
      case REGISTER: {
        if (validateRegister(data)) {
          try {
            const register = await axios.post("/api/users", data);
            const registerData = register.data;
            const error = registerData.error;
            if (error) {
              return message.error(error);
            }
            hideModal();
            history.push("/");
            return message.success("Successfully registered.");
          } catch (err) {
            return message.error("The server could not be reached.");
          }
        } else {
          // temporary error message notification instead of in-form notification
          return message.error(
            "There is an error with either email or password."
          );
        }
      }
      case SIGN_IN: {
        try {
          const signin = await axios.post("/signin", data);
          const token = signin.data.token;
          cookies.set("token", token);
          hideModal();
          signIn(token);
          history.push("/");
          return message.success("Signed in.");
        } catch (err) {
          const errorMessage = err.response.data.error;
          return message.error(errorMessage);
        }
      }
      default: {
        return;
      }
    }
  };

  handleConfirmFocus = (rule, val, cb) => {
    const { form } = this.props;
    const original = form.getFieldValue("password");
    if (val === original) {
      cb();
    }
  };

  handleConfirmBlur = (rule, val, cb) => {
    const { form } = this.props;
    const original = form.getFieldValue("password");
    if (val !== original) {
      return cb("The passwords do not match.");
    }
  };

  renderSpecific = (command, getFieldDecorator) => {
    switch (command) {
      case SIGN_IN: {
        return <SignInSpecific getFieldDecorator={getFieldDecorator} />;
      }
      case REGISTER: {
        return (
          <RegisterSpecific
            getFieldDecorator={getFieldDecorator}
            handleBlur={this.handleConfirmBlur}
            handleFocus={this.handleConfirmFocus}
          />
        );
      }
      default: {
        return;
      }
    }
  };

  render() {
    const { form, command } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form id="auth_form" onSubmit={e => this.handleSubmit(e, command)}>
        <Username getFieldDecorator={getFieldDecorator} />
        <Password getFieldDecorator={getFieldDecorator} />
        {this.renderSpecific(command, getFieldDecorator)}
        <Buttons command={command} />
      </Form>
    );
  }
}

export default connect(
  null,
  { hideModal, signIn, signOut }
)(Form.create({ name: "auth_form" })(AuthForm));
