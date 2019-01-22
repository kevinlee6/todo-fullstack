import React from 'react';
import { COMMANDS } from '../../constants';
import { Form, Button } from 'antd';
import styled from 'styled-components';

const { SIGN_IN } = COMMANDS;

const WideButton = styled(Button)`
  width: 100%;
`;

const FormItem = styled(Form.Item)`
  text-align: center;
`;

export default ({ command }) => {
  const [first, second] =
    command === SIGN_IN ? ['Sign In', 'Register'] : ['Register', 'Sign In'];
  return (
    <FormItem>
      <WideButton type="primary">{first}</WideButton>
      <p>
        or <a href="">{second}</a>
      </p>
    </FormItem>
  );
};
