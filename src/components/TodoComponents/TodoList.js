import React from 'react';
import Todo from './Todo';

function TodoList(props) { return props.todos.map((todosFromMap, index) => { 
return <Todo key={index} todo={todosFromMap} />
        
});
};

export default TodoList;