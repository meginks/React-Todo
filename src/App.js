import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todos = [
    {task: 'clean bathroom', 
    id: Date.now(), 
    completed: false
    }, 
      
    {task: 'take out trash', 
    id: Date.now(), 
    completed: false
    }, 

    {task: 'cook dinner', 
    id: Date.now(), 
    completed: false
    }, 

    {task: 'do laundry', 
    id: Date.now(), 
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
      todos
    };
  }

  addTodo = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.task, 
      id: Date.now(),
      completed: false
    }; 
    this.setState({
      todos: [...this.state.todos, newTodo],
      task: "",
      id: "",
      completed: ""
    }); 
  };  

  toggleCompleted = (id) => {
    this.setState ({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) { 
            todo.completed = !todo.completed
        }
        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();

  }

  handleChanges = e => {
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h2>To Do List</h2>
        <div className="todo-list">
        <div className="todo-list">
        {/* {this.state.todos.map((todosFromMap, index) => (
         <Todo key={index} todo={todosFromMap} />
        ))} */}
        <TodoList 
        todos = {this.state.todos}
        toggleCompleted={this.toggleCompleted}/> 
        </div>
        </div>
        <TodoForm 
        value={this.state.task}
        addTodo={this.addTodo}
        name={this.state.task}
        id={this.state.id}
        completed={this.state.completed}
        handleChanges={this.handleChanges}
        />
      </div>
    );
  }
} 
export default App;
