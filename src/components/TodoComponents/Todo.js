import React from 'react';

const Todo = (props) => {
    return (
        <div 
            className={`todo-item ${props.todo.completed ? "completed" : null}`}
            onClick={props.toggleCompleted}
        >
        {props.todo.task}
        {props.todo.completed}
        </div>
    )
}



export default Todo; 