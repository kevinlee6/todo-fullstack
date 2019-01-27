import { Layout } from "antd";
import styled from "styled-components";

export default styled(Layout.Content)`
  padding: 25px 50px;
  min-height: 84vh !important;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;
