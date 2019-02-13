import React from 'react';

function Todo(props) {
    return (
        <div className="todo-item">
        {props.todo.task}
        </div>
    )
}



export default Todo; 