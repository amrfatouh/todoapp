import React from 'react'

class AddTodo extends React.Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        const todoInput = document.getElementById('todo-input');
        todoInput.value='';
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input id="todo-input" type="text" onChange={this.handleChange} placeholder="Type new task here. E.g. do the shopping" />
                </form>
            </div>
        )
    }
}

export default AddTodo