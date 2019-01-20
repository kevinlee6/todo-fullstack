import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../redux/actions';
import { COMMANDS } from '../constants';
import { Icon } from 'antd';

import './Options.css';

const { DELETE, EDIT } = COMMANDS;

// Each todo will have a set of options/buttons to edit/delete
// The buttons will trigger a confirmation modal before commiting
const Options = ({ toggleModal, todo }) => (
  <div className="Options">
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
