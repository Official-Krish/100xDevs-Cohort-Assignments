import React from 'react';

class TodoAppWithoutState extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      title: '',
      description: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddTodo = () => {
    const { title, description, todos } = this.state;
    if (title && description) {
      const newTodo = { title, description };
      this.setState({
        todos: [...todos, newTodo],
        title: '',
        description: '',
      });
    }
  };

  render() {
    const { title, description, todos } = this.state;

    return (
      <div>
        <h2>Todo App (Without useState)</h2>
        <div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddTodo}>Add Todo</button>
        </div>
        <div>
          <h3>Todos:</h3>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo.title} - {todo.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoAppWithoutState;
