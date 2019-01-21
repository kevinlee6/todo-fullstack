import React from 'react';
import { Layout } from 'antd';
import TodoListContainer from './TodoListContainer';
import styled from 'styled-components';

const Content = styled(Layout.Content)`
  padding: 25px 50px;

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
