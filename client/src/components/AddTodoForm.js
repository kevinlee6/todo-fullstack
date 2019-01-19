import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import { Form, Input, Button } from 'antd';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  handleChange = e => {
    const userInput = e.target.value;
    this.setState({ userInput });
  };

  handleSubmit = e => {
    e.preventDefault();
    const userInput = this.state.userInput;
    // Reject empty inputs
    if (!userInput || !userInput.length) return;

    this.props.addTodo(userInput);
    this.setState({ userInput: '' });
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
          <Button htmlType="submit">Add Todo</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodoForm);
