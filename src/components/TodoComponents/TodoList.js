import React from 'react';
import Todo from './Todo';
import './Todo.css';

function TodoList(props) { return props.todos.map((todosFromMap, index) => { 
return <Todo key={index} todo={todosFromMap} 
className={"todo-item " + (todosFromMap.completed ? "completed" : null)} toggleCompleted={props.toggleCompleted} />
        
});
};

export default TodoList;