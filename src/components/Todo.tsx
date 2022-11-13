import React from 'react';

let count = 1;
const Todo = (props) => {
  const { taskId, task, deleteTodo } = props;

  console.log('todo rendered', count++);
  return (
    <>
      <div>
        {task}
        <button onClick={() => deleteTodo(taskId)}>X</button>
      </div>
    </>
  );
};

export default React.memo(Todo);
