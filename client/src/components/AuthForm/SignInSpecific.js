import React, { Component } from 'react';
import { Form, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;

export default class extends Component {
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <Form.Item>
        <Div>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: false,
          })(<Checkbox>Stay signed in</Checkbox>)}
          <Link to="forgotpassword">Forgot your password?</Link>
        </Div>
      </Form.Item>
    );
  }
}
