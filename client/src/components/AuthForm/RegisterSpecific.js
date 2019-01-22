import React, { Component } from 'react';
import { PrefixIcon } from './Styled';
import { Form, Input } from 'antd';

export default class extends Component {
  render() {
    const { getFieldDecorator, handleBlur, handleFocus } = this.props;
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
                { validator: handleBlur },
                {
                  min: 6,
                  message: 'Password must be at least 6 characters.',
                },
              ],
            },
            {
              trigger: 'onFocus',
              rules: [{ validator: handleFocus }],
            },
          ],
        })(
          <Input.Password
            prefix={<PrefixIcon type="lock" />}
            placeholder="Password confirmation"
          />
        )}
      </Form.Item>
    );
  }
}
