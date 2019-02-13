import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todos = [
    {task: 'clean bathroom', 
    id: 1, 
    completed: false
    }, 
      
    {task: 'take out trash', 
    id: 2, 
    completed: false
    }, 

    {task: 'cook dinner', 
    id: 3, 
    completed: false
    }, 

    {task: 'do laundry', 
    id: 4, 
    completed: false
    }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos, 
      task: "",
      id: "",
      completed: ""
    };
  }

  addTodo = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.task, 
      id: this.state.id,
      completed: this.state.completed
    }; 
    this.setState({
      todos: [...this.state.todos, newTodo],
      task: "",
      id: "",
      completed: ""
    }); 
  };  

  handleChanges = e => {
    this.setState({
      [e.target.task]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h2>To Do List</h2>
        <div className="todo-list">
        <div className="todo-list">
        {this.state.todos.map((todosFromMap, index) => (
         <Todo key={index} todo={todosFromMap} />
        ))}
        </div>
        </div>
        <TodoForm />
      </div>
    );
  }
} 
export default App;
