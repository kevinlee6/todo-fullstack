import React, { Component } from 'react';
import { PrefixIcon } from './Styled';
import { Form, Input } from 'antd';

export default class extends Component {
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <Form.Item>
        {getFieldDecorator('password', {
          validate: [
            {
              trigger: 'onBlur',
              rules: [
                { required: true, message: 'Password cannot be blank.' },
                { min: 6, message: 'Password must be at least 6 characters.' },
              ],
            },
          ],
        })(
          <Input.Password
            prefix={<PrefixIcon type="lock" />}
            placeholder="Password"
          />
        )}
      </Form.Item>
    );
  }
}
