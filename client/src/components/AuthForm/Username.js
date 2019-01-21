import React, { Component } from 'react';
import Icon from './Icon';
import { Form, Input } from 'antd';

export default class extends Component {
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username cannot be blank.' }],
        })(<Input prefix={<Icon type="user" />} placeholder="Username" />)}
      </Form.Item>
    );
  }
}
