import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";
import { decode } from "../../helper";
import { message, Form, Input, Button } from "antd";
import axios from "axios";

class AddTodoForm extends Component {
  state = {
    userInput: ""
  };

  handleChange = e => {
    const userInput = e.target.value;
    this.setState({ userInput });
  };

  handleSubmit = async e => {
    // might want to wrap in a giant try catch
    const { token, addTodo } = this.props;
    e.preventDefault();
    const content = this.state.userInput;
    // Reject empty inputs
    if (!content || !content.length) {
      return this.error();
    }
    // handle db
    const decoded = await decode(token);
    const { user_id } = decoded;
    const res = await axios.post(
      "/api/todos",
      {
        payload: {
          user_id,
          content
        }
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );
    const todo = res.data && res.data.todo;
    addTodo(todo);
    message.success("Added todo");
    this.setState({ userInput: "" });
  };

  error = () => {
    message.error("Todo content cannot be blank.");
  };

  render() {
    return (
      <Form layout="inline" onSubmit={e => this.handleSubmit(e)}>
        <Form.Item>
          <Input
            value={this.state.userInput}
            placeholder="Add a todo"
            onChange={e => this.handleChange(e)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" shape="circle" icon="plus" htmlType="submit" />
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  const token = state.auth.token;
  return { token };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(AddTodoForm);
