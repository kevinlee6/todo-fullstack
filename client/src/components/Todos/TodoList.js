import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo, syncTodos } from "../../redux/actions";
import getByVisibility from "../../redux/selectors";
import Todo from "./Todo";
import { message, List, Empty as AntdEmpty } from "antd";
import styled from "styled-components";
import axios from "axios";

const Item = styled(List.Item)`
  padding: 12px !important;
  ${({ completed }) => completed === "true" && { backgroundColor: "lightgrey" }}

  :hover {
    cursor: pointer;
    background-color: rgba(250, 250, 250, 0.9);
  }
`;

const Empty = styled(AntdEmpty)`
  @media (min-width: 577px) {
    width: 70%;
  }
`;

const info = () => message.info("Todo toggled");

class TodoList extends Component {
  async componentDidMount() {
    // assumes user is logged on if they can see this component
    const { token, syncTodos } = this.props;
    const res = await axios.get("/api/todos", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    const todos = res.data.todos.reverse();
    syncTodos(todos);
  }

  handleToggle = async (id, completed) => {
    const { token, toggleTodo } = this.props;
    await axios.patch(
      `/api/todos/${id}`,
      { completed: !completed },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );
    info();
    toggleTodo(id);
  };

  render() {
    const { todos } = this.props;
    return todos && todos.length ? (
      <List
        size="large"
        dataSource={todos}
        renderItem={todo => (
          <Item
            onClick={() => {
              this.handleToggle(todo.id, todo.completed);
            }}
            completed={todo.completed.toString()}
          >
            <Todo todo={todo} />
          </Item>
        )}
      />
    ) : (
      <Empty description="There are no todos in this section." />
    );
  }
}

const mapStateToProps = state => {
  const { filter, auth } = state;
  const todos = getByVisibility(state, filter);
  const { token } = auth;
  return { todos, token };
};

export default connect(
  mapStateToProps,
  { toggleTodo, syncTodos }
)(TodoList);
