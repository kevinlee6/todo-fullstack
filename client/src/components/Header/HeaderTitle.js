import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  fill: green;
  min-width: 30px;
`;

const Logo = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
  </Svg>
);

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

const HeaderTitle = () => (
  <Div>
    <Logo />
    <H1>Todo Manager</H1>
  </Div>
);

export default HeaderTitle;
