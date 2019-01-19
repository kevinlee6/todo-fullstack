import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

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
    this.props.addTodo(userInput);
    this.setState({ userInput: '' });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          value={this.state.userInput}
          onChange={e => this.handleChange(e)}
          type="text"
        />
        <button>Add todo</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodoForm);
