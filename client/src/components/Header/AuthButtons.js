import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../redux/actions';
import { COMMANDS } from '../../constants';
import { Button } from 'antd';
import styled from 'styled-components';

const { SIGN_IN, REGISTER } = COMMANDS;

const ButtonGroup = styled(Button.Group)`
  @media (max-width: 576px) {
    display: none !important;
  }
`;

const AuthButtons = ({ showModal }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => showModal(SIGN_IN)}>Sign In</Button>
      <Button onClick={() => showModal(REGISTER)}>Register</Button>
    </ButtonGroup>
  );
};

export default connect(
  null,
  { showModal }
)(AuthButtons);
