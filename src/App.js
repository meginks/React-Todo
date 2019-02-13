import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: [
      {task: 'clean bathroom', 
      id: 1, 
      completed: false}, 
      
      {task: 'take out trash', 
      id: 2, 
      completed: false}, 

      {task: 'cook dinner', 
      id: 3, 
      completed: false}, 

      {task: 'do laundry', 
      id: 4, 
      completed: false}
    ]
  }


  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <TodoList 
        todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
