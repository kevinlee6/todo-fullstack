import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { toggleModal, editTodo, deleteTodo } from '../redux/actions';
import { COMMANDS } from '../constants';
import { message, Modal, Input, Button } from 'antd';
import AuthForm from './AuthForm';
import modalFooter from './hoc/modalFooter';
import { titleCase } from '../helper';
import styled from 'styled-components';

const { DELETE, EDIT, SIGN_IN, REGISTER } = COMMANDS;
const todoCommands = [DELETE, EDIT];

const ConfirmationP = styled.p`
  margin: 15px 0;
`;
const Confirmation = ({ command }) => (
  <ConfirmationP>
    Are you sure you want to {command.toLowerCase()} the todo?
  </ConfirmationP>
);

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

  handleOk = (command, todo = null) => {
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
    message.error('Field cannot be empty.');
  };

  renderBody = (command, todo = null) => {
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
        case SIGN_IN:
        case REGISTER: {
          return <AuthForm command={command} />;
        }
        default: {
          return <p>Unknown command.</p>;
        }
      }
    })();

    return (
      <Fragment>
        <MainText />
        {todoCommands.includes(command) ? (
          <Confirmation command={command} />
        ) : null}
      </Fragment>
    );
  };

  render() {
    const { command, todo, visible } = this.props;
    const handleOk = () => this.handleOk(command, todo);
    const title = command ? `${titleCase(command)}` : 'Error: no command';
    const footer = todoCommands.includes(command)
      ? modalFooter(Button, command, handleOk, this.handleCancel)
      : null;
    return (
      <Modal
        visible={visible}
        title={title}
        onOk={handleOk}
        onCancel={this.handleCancel}
        footer={footer}
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
