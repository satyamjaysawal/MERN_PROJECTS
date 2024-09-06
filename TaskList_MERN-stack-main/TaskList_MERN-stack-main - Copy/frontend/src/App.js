import './App.css';

import React, { Component } from 'react';
import axios from 'axios';

// CHANGE TO YOUR BACKEND URL
const backendUrl = 'http://localhost:4000/api';

// BASE URL (backend)
const api = axios.create({
  baseURL: backendUrl
});

class App extends Component {
  state = {
    tasks: []
  };

  constructor() {
    super();
    this.getTasks();
  }

  // Function for getting all tasks
  getTasks = async () => {
    try {
      const response = await api.get('/tasks');
      const data = response.data;
      this.setState({ tasks: data });
    } catch (error) {
      console.log(error);
    }
  };

  setTask = async (title, text) => {
    const data = {
      title: title,
      text: text
    };

    try {
      await api.post('/task', data);
      this.getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  deleteTask = async (taskId) => {
    try {
      await api.delete(`/task/${taskId}`);
      this.getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.taskTitle.value;
    const text = event.target.elements.taskText.value;

    this.setTask(title, text);
  };

  render() {
    return (
      <div className="App">
        {/* ADD TASK */}
        <h1 className="headerText">Add new task 🤙</h1>

        <div>
          <form className="addTaskForm" onSubmit={this.handleSubmit}>
            <label>Task title</label>
            <input type="text" id="title" name="taskTitle" placeholder="Task title..." />

            <label>Task text</label>
            <input type="text" id="text" name="taskText" placeholder="Task text..." />

            <input type="submit" value="Add Task" />
          </form>
        </div>

        {/* TASKS */}
        <div className="tasks">
          <h1 className="headerText">Must complete tasks ✅</h1>
          {this.state.tasks.map((task) => (
            <div className="taskHolder" key={task._id}>
              <h2>{task.title}</h2>
              <p>{task.text}</p>
              <button onClick={() => this.deleteTask(task._id)}>❌ Delete task</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
