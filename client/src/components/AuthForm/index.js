import React, { Component } from 'react';
import Username from './Username';
import Password from './Password';
import SignInSpecific from './SignInSpecific';
import { Form } from 'antd';

class AuthForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Username getFieldDecorator={getFieldDecorator} />
        <Password getFieldDecorator={getFieldDecorator} />
        <SignInSpecific getFieldDecorator={getFieldDecorator} />
      </Form>
    );
  }
}

export default Form.create({ name: 'auth_form' })(AuthForm);
