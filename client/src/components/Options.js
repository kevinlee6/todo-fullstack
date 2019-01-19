import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../redux/actions';
import { COMMANDS } from '../constants';
import { Icon } from 'antd';

const { DELETE, EDIT } = COMMANDS;

const Options = ({ toggleModal, todo }) => (
  <div>
    <Icon type="edit" onClick={() => toggleModal(EDIT, todo)} />
    <Icon
      style={{ color: 'red' }}
      type="minus-circle"
      onClick={() => toggleModal(DELETE, todo)}
    />
  </div>
);

export default connect(
  null,
  { toggleModal }
)(Options);
