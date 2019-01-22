import React from 'react';
import styled from 'styled-components';
import { Icon as AntdIcon } from 'antd';

const Icon = styled(AntdIcon)`
  color: rgb(0, 222, 0);
  font-size: 2em;
  padding-right: 10px;
`;

const Logo = () => <Icon type="check" />;

const Div = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  min-width: 120px;
  max-width: 250px;
  margin: 0 30px;
`;

const H1 = styled.h1`
  margin: 0;
  color: white;
  white-space: nowrap;
`;

export default () => (
  <Div>
    <Logo />
    <H1>Todo Manager</H1>
  </Div>
);
