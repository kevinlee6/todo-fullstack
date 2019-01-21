import React, { Component } from 'react';
import Icon from './Icon';
import { Form, Input } from 'antd';

export default class extends Component {
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Password cannot be blank.' }],
        })(
          <Input
            prefix={<Icon type="lock" />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
    );
  }
}
