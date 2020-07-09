import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? todos.map(todo => {
        return (
            <div className="collection-item underlined" key={todo.id}>
                <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
            </div>
        )
    }) : (
        <div className="collection-item">
            you have nothing to do now!
        </div>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos