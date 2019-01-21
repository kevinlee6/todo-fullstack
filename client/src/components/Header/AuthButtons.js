import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux/actions';
import { COMMANDS } from '../../constants';
import { Button } from 'antd';
import styled from 'styled-components';

const { SIGN_IN, REGISTER } = COMMANDS;

const ButtonGroup = styled(Button.Group)`
  @media (max-width: 576px) {
    display: none !important;
  }
`;

const AuthButtons = ({ toggleModal }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => toggleModal(SIGN_IN)}>Sign In</Button>
      <Button onClick={() => toggleModal(REGISTER)}>Register</Button>
    </ButtonGroup>
  );
};

export default connect(
  null,
  { toggleModal }
)(AuthButtons);
