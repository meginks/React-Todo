import React from 'react';

function Todo(props) {
    return (
        <div className="todo-item">
        {props.todo.task}
        {props.todo.completed}
        </div>
    )
}



export default Todo; 