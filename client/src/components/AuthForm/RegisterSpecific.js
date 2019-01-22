import React, { Component } from 'react';
import Icon from './Icon';
import { Form, Input } from 'antd';

export default class extends Component {
  render() {
    const { getFieldDecorator, validator } = this.props;
    return (
      <Form.Item>
        {getFieldDecorator('confirm', {
          validate: [
            {
              trigger: 'onBlur',
              rules: [
                {
                  required: true,
                  message: 'Password confirmation cannot be blank.',
                },
                { validator },
                {
                  min: 6,
                  message: 'Password must be at least 6 characters.',
                },
              ],
            },
          ],
        })(
          <Input.Password
            prefix={<Icon type="lock" />}
            placeholder="Password confirmation"
          />
        )}
      </Form.Item>
    );
  }
}
