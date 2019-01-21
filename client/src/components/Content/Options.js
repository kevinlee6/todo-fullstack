import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux/actions';
import { COMMANDS } from '../../constants';
import { Icon } from 'antd';
import styled from 'styled-components';

const { DELETE, EDIT } = COMMANDS;

const Div = styled.div`
  width: 15%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > * {
    cursor: pointer;
    padding: 5px;
    margin: 0 10px;
    font-size: 1.6em;

    :hover {
      opacity: 0.5;
    }
  }
`;

// Each todo will have a set of options/buttons to edit/delete
// The buttons will trigger a confirmation modal before commiting
const Options = ({ toggleModal, todo }) => (
  <Div>
    <Icon type="edit" onClick={() => toggleModal(EDIT, todo)} />
    <Icon
      style={{ color: 'red' }}
      type="minus-circle"
      onClick={() => toggleModal(DELETE, todo)}
    />
  </Div>
);

export default connect(
  null,
  { toggleModal }
)(Options);
