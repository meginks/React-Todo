import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div 
        onClick={() => props.toggleCompleted(props.todo.id)}
        className={"todo-item " + (props.todo.completed ? "completed" : null)} 
        >
        {props.todo.task}
        </div>
    )
}



export default Todo; 