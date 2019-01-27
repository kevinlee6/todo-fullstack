import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../../redux/actions";
import getByVisibility from "../../redux/selectors";
import Todo from "./Todo";
import { message, List, Empty as AntdEmpty } from "antd";
import styled from "styled-components";
import axios from "axios";

// from express node_modules
import { verify } from "jsonwebtoken";

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
    const { token } = this.props;
    const decode = await verify(token, process.env.REACT_APP_SECRET);
    const { user_id } = decode;
    const todos = await axios.get("/api/todos", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      id: user_id
    });
    console.log(todos);
  }

  render() {
    const { todos, toggleTodo } = this.props;
    return todos && todos.length ? (
      <List
        size="large"
        dataSource={todos}
        renderItem={todo => (
          <Item
            onClick={() => {
              info();
              toggleTodo(todo.id);
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
  { toggleTodo }
)(TodoList);
