import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal, editTodo, deleteTodo } from '../redux/actions';
import { COMMANDS } from '../constants';
import { Modal, Input } from 'antd';

const { DELETE, EDIT } = COMMANDS;

class ModalWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  handleOk = (command, todo) => {
    switch (command) {
      case DELETE: {
        this.props.deleteTodo(todo.id);
        break;
      }
      case EDIT: {
        const userInput = this.state.userInput;
        this.props.editTodo(todo.id, userInput);
        this.setState({ userInput: '' });
        break;
      }
      default: {
        break;
      }
    }
    this.props.toggleModal();
  };

  handleCancel = () => {
    this.props.toggleModal();
  };

  handleChange = e => {
    const userInput = e.target.value;
    this.setState({ userInput });
  };

  render() {
    const { command, todo, visible } = this.props.modal;
    console.log(command, todo, visible);
    return visible ? (
      <Modal
        visible={visible}
        title={`${command.toLowerCase()} todo`}
        onOk={() => this.handleOk(command, todo)}
        onCancel={this.handleCancel}
      >
        <Input value={todo.content} onChange={e => this.handleChange(e)} />
        Are you sure you want to {command.toLowerCase()} the todo?
      </Modal>
    ) : null;
  }
}

const mapStateToProps = state => {
  const { modal } = state;
  return { modal };
};

export default connect(
  mapStateToProps,
  { toggleModal, editTodo, deleteTodo }
)(ModalWrapper);
