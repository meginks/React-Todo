import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTodo}>
            <input 
                type="text"
                value={props.task}
                onChange={props.handleChanges}
                placeholder="add task here"
            />
            <button onClick={props.addTodo}>Add To Do</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;