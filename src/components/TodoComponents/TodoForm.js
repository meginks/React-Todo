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
        </form>
    );
};

export default TodoForm;