import React, { Component } from 'react';
import axios from 'axios';
import Username from './Username';
import Password from './Password';
import SignInSpecific from './SignInSpecific';
import RegisterSpecific from './RegisterSpecific';
import Buttons from './Buttons';
import { COMMANDS } from '../../constants';
import { validateRegister } from '../../helper';
import { Form, message } from 'antd';

const { SIGN_IN, REGISTER } = COMMANDS;

class AuthForm extends Component {
  handleSubmit = async (e, command) => {
    e.preventDefault();
    const { form } = this.props;
    const data = form.getFieldsValue();
    form.validateFields('');
    switch (command) {
      case REGISTER: {
        if (validateRegister(data)) {
          console.log(data);
          console.log('success');
          try {
            await axios.post('/users', data);
            return message.success('Signed in');
          } catch (err) {
            return message.error('The server could not be reached.');
          }
        } else {
          // temporary error message notification instead of in-form notification
          return message.error(
            'There is an error with either email or password.'
          );
        }
      }
      case SIGN_IN: {
        break;
      }
      default: {
        return;
      }
    }
  };

  handleConfirmFocus = (rule, val, cb) => {
    const { form } = this.props;
    const original = form.getFieldValue('password');
    if (val === original) {
      cb();
    }
  };

  handleConfirmBlur = (rule, val, cb) => {
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

export default Form.create({ name: 'auth_form' })(AuthForm);
