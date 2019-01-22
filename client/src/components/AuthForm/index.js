import React, { Component } from 'react';
import Username from './Username';
import Password from './Password';
import SignInSpecific from './SignInSpecific';
import RegisterSpecific from './RegisterSpecific';
import { COMMANDS } from '../../constants';
import { Form } from 'antd';

const { SIGN_IN, REGISTER } = COMMANDS;

class AuthForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  validateConfirm = (rule, val, cb) => {
    const { form } = this.props;
    const original = form.getFieldValue('password');
    if (val !== original) {
      return cb('The passwords do not match.');
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
            validator={this.validateConfirm}
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
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Username getFieldDecorator={getFieldDecorator} />
        <Password getFieldDecorator={getFieldDecorator} />
        {this.renderSpecific(command, getFieldDecorator)}
      </Form>
    );
  }
}

export default Form.create({ name: 'auth_form' })(AuthForm);
