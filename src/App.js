import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import FinishedTasks from './FinishedTasks';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'make my bed' },
      { id: 2, content: 'study a little bit' }
    ],
    finishedTasks: [
      { id: 10, content: 'have breakfast' },
      { id: 11, content: 'organize my stuff' }
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    const todo = this.state.todos.find(t => t.id === id);
    this.setState({
      todos,
      finishedTasks: [...this.state.finishedTasks, todo]
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }

  deleteFinishedTask = (id) => {
    this.setState({
      finishedTasks: this.state.finishedTasks.filter(task => task.id !== id)
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
        <FinishedTasks
          finishedTasks={this.state.finishedTasks}
          deleteFinishedTask={this.deleteFinishedTask} />
      </div>
    );
  }
}

export default App;
