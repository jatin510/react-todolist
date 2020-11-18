import React from "react";

export default function Task(props) {
  const { task, deleteTask, index } = props;
  return (
    <li>
      {" "}
      {task} <button onClick={() => deleteTask(index)}>X</button>
    </li>
  );
}
