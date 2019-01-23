import React from 'react';
import styled from 'styled-components';
import { COMMANDS } from '../../constants';

const { SIGN_IN, REGISTER } = COMMANDS;

const Div = styled.div`
  width: 40%;
  padding: 40px;
  margin: auto;
`;

const renderTitle = command => {
  switch (command) {
    case SIGN_IN: {
      return 'Welcome back';
    }
    case REGISTER: {
      return "Let's get started";
    }
    default: {
      return;
    }
  }
};

const Title = ({ title }) => <h2>{title}</h2>;

export default (WrappedComponent, command = null) => {
  return (
    <Div>
      {command ? <Title title={renderTitle(command)} /> : null}
      {WrappedComponent}
    </Div>
  );
};
