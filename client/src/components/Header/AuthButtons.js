import React from "react";
import { connect } from "react-redux";
import { showModal, signOut } from "../../redux/actions";
import { COMMANDS } from "../../constants";
import { Button } from "antd";
import styled from "styled-components";

const { SIGN_IN, REGISTER } = COMMANDS;

const ButtonGroup = styled(Button.Group)`
  @media (max-width: 576px) {
    display: none !important;
  }
`;

const AuthButtons = ({ showModal, signOut, isSignedIn }) => {
  return isSignedIn ? (
    <Button onClick={signOut}>Sign out</Button>
  ) : (
    <ButtonGroup>
      <Button onClick={() => showModal(SIGN_IN)}>Sign In</Button>
      <Button onClick={() => showModal(REGISTER)}>Register</Button>
    </ButtonGroup>
  );
};

const mapStateToProps = state => {
  const isSignedIn = state.auth && state.auth.isSignedIn;
  return { isSignedIn };
};

export default connect(
  mapStateToProps,
  { showModal, signOut }
)(AuthButtons);
