import React from "react";
import Task from "./Task";

export default function Tasks(props) {
  console.log("props");
  console.log(props.tasks);

  const { tasks } = props;
  return tasks.map((task, index) => (
    <Task task={task} key={index} deleteTask={props.deleteTask} index={index} />
  ));
}
