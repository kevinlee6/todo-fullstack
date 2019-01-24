import React, { Component } from 'react';
import { PrefixIcon } from './Styled';
import { Form, Input } from 'antd';

export default class extends Component {
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <Form.Item>
        {getFieldDecorator('email', {
          validate: [
            {
              trigger: 'onBlur',
              rules: [
                { required: true, message: 'Email cannot be blank.' },
                { type: 'email', message: 'Email must be valid.' },
              ],
            },
          ],
        })(
          <Input
            prefix={<PrefixIcon type="user" />}
            name="email"
            type="email"
            placeholder="Email"
          />
        )}
      </Form.Item>
    );
  }
}
