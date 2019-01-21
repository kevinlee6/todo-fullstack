import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { toggleModal, editTodo, deleteTodo } from '../redux/actions';
import { COMMANDS } from '../constants';
import { message, Modal, Input, Button } from 'antd';
import modalFooter from './hoc/modalFooter';
import { titleCase } from '../helper';

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
        if (!userInput.length) {
          return this.error();
        }
        editTodo(todo.id, userInput);
        this.setState({ userInput: '' });
        break;
      }
      default: {
        break;
      }
    }
    this.success(command);
    toggleModal();
  };

  handleCancel = () => {
    this.props.toggleModal();
  };

  handleChange = e => {
    const userInput = e.target.value;
    this.setState({ userInput });
  };

  success = command => {
    if (command) {
      message.success(`${titleCase(command)} successful.`);
    }
  };

  error = () => {
    message.error('Todo cannot be empty.');
  };

  renderBody = (command, todo) => {
    // IIFE to deal with switch/case
    const MainText = (() => () => {
      switch (command) {
        case DELETE: {
          return <p>Todo to delete: {todo.content}</p>;
        }
        case EDIT: {
          return (
            <Input
              autoFocus
              placeholder={`Original: ${todo.content}`}
              value={this.state.userInput}
              onChange={e => this.handleChange(e)}
              onPressEnter={() => this.handleOk(command, todo)}
            />
          );
        }
        default: {
          return <p>Unknown command.</p>;
        }
      }
    })();

    const Supplement = () => (
      <p>
        Are you sure you want to {command && command.toLowerCase()} the todo?
      </p>
    );

    return (
      <Fragment>
        <MainText />
        <Supplement />
      </Fragment>
    );
  };

  render() {
    const { command, todo, visible } = this.props;
    const handleOk = () => this.handleOk(command, todo);
    const title = command ? `${titleCase(command)} Todo` : 'Error: no command';
    return (
      <Modal
        visible={visible}
        title={title}
        onOk={handleOk}
        onCancel={this.handleCancel}
        footer={modalFooter(Button, command, handleOk, this.handleCancel)}
      >
        {this.renderBody(command, todo)}
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
