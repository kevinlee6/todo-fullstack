import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { showModal, hideModal, editTodo, deleteTodo } from "../redux/actions";
import { COMMANDS } from "../constants";
import { message, Modal, Input, Button } from "antd";
import AuthForm from "./AuthForm";
import modalFooter from "./hoc/modalFooter";
import { titleCase } from "../helper";
import styled from "styled-components";
import axios from "axios";

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
      userInput: ""
    };
  }

  componentDidMount() {
    const { todo } = this.props;
    if (todo) {
      const userInput = todo.content;
      this.setState({ userInput });
    }
  }

  handleOk = async (command, todo = null) => {
    const { deleteTodo, editTodo, hideModal, token } = this.props;
    const id = todo && todo.id;
    switch (command) {
      case DELETE: {
        await axios.delete(`/api/todos/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });
        deleteTodo(id);
        break;
      }
      case EDIT: {
        const content = this.state.userInput;
        if (!content.length) {
          return this.error();
        }
        await axios.patch(
          `/api/todos/${id}`,
          { content },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
        );
        editTodo(id, content);
        this.setState({ content: "" });
        break;
      }
      default: {
        break;
      }
    }
    this.success(command);
    hideModal();
  };

  handleCancel = () => {
    this.props.hideModal();
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
    message.error("Field cannot be empty.");
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
    const title = command ? `${titleCase(command)}` : "Error: no command";
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
  const { modal, auth } = state;
  const { command, todo, visible } = modal;
  const { token } = auth;
  return { command, todo, visible, token };
};

export default connect(
  mapStateToProps,
  { hideModal, showModal, editTodo, deleteTodo }
)(ModalWrapper);
