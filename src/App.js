import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const tasks = [
  {
      name: "Clean Bathroom",
      id: 123,
      completed: false
  },
  {
      name: "Plan Birthday Party",
      id: 1234,
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
      tasks: tasks
    };
  }

  toggleTask = taskId => {
    console.log(taskId);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    })
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="content">
        <h2>Welcome to Todo!</h2>
        <TodoForm addTask={this.addTask} />
      </div>
        <div className="my-tasks">
          <h3>My Tasks</h3>
          <div className="task-list">
        <TodoList
          toggleTask={this.toggleTask}
          tasks={this.state.tasks}
          clearCompleted={this.clearCompleted}
        />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
