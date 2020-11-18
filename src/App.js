import React, { Component } from "react";
import Tasks from "./Tasks";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      task: "",
    };
  }

  handleInput = (e) => {
    // console.log(e.target.value)
    const { value: task } = e.target;
    task.trim();
    console.log(task);
    this.setState({ task });
  };

  handleClick = () => {
    let { task, tasks } = this.state;
    console.log(task);

    task = task.trim();
    if (task.length) tasks.push(task);

    this.setState({ tasks });
  };

  handleDelete = (index) => {
    console.log(index);
    console.log("handle delete");
    let { tasks } = this.state;

    // [1,2 ,3,4,5]
    tasks.splice(index, 1);

    this.setState({ tasks });
  };

  render() {
    const { tasks } = this.state;
    console.log(tasks);
    return (
      <div>
        <input onChange={this.handleInput} />
        <button onClick={this.handleClick}> Add task </button>
        <br />

        <Tasks tasks={tasks} deleteTask={this.handleDelete} />
      </div>
    );
  }
}
