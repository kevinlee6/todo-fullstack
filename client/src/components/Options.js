import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions';
import { Icon } from 'antd';

const Options = ({ deleteTodo, todo }) => (
  <div>
    <Icon type="edit" />
    <Icon type="minus-circle" onClick={() => deleteTodo(todo.id)} />
  </div>
);

export default connect(
  null,
  { deleteTodo }
)(Options);
