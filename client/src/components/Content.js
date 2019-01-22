import React from 'react';
import { Layout } from 'antd';
import TodoListContainer from './Todos';
import styled from 'styled-components';

const Content = styled(Layout.Content)`
  padding: 25px 50px;
  min-height: 87vh !important;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

export default () => (
  <Content>
    <TodoListContainer />
  </Content>
);
