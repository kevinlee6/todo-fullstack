import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const ButtonGroup = styled(Button.Group)`
  @media (max-width: 576px) {
    display: none !important;
  }
`;

const AuthButtons = () => {
  return (
    <ButtonGroup>
      <Button>Log In</Button>
      <Button>Register</Button>
    </ButtonGroup>
  );
};

export default AuthButtons;
