import React, { Component, createRef } from 'react';
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

  componentDidMount() {
    const { todo } = this.props;
    if (todo) {
      const userInput = todo.content;
      this.setState({ userInput });
    }
  }

  handleOk = (command, todo) => {
    const { deleteTodo, editTodo, toggleModal } = this.props;
    switch (command) {
      case DELETE: {
        deleteTodo(todo.id);
        break;
      }
      case EDIT: {
        const userInput = this.state.userInput;
        editTodo(todo.id, userInput);
        this.setState({ userInput: '' });
        break;
      }
      default: {
        break;
      }
    }
    toggleModal();
  };

  handleCancel = () => {
    this.props.toggleModal();
  };

  handleChange = e => {
    const userInput = e.target.value;
    this.setState({ userInput });
  };

  renderBody = (command, todo) => {
    switch (command) {
      case DELETE: {
        return <p>Todo to delete: {todo.content}</p>;
      }
      case EDIT: {
        return (
          <Input
            autoFocus
            value={this.state.userInput}
            onChange={e => this.handleChange(e)}
          />
        );
      }
      default: {
        return <p>Unknown command.</p>;
      }
    }
  };

  render() {
    const { command, todo, visible } = this.props;
    return (
      <Modal
        visible={visible}
        title={`${command.toLowerCase()} todo`}
        onOk={() => this.handleOk(command, todo)}
        onCancel={this.handleCancel}
      >
        {this.renderBody(command, todo)}
        Are you sure you want to {command.toLowerCase()} the todo?
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  const { modal } = state;
  const { command, todo, visible } = modal;
  return { command, todo, visible };
};

export default connect(
  mapStateToProps,
  { toggleModal, editTodo, deleteTodo }
)(ModalWrapper);
