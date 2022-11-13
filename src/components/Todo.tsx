import React from 'react';

let count = 1;
const Todo = (props) => {
  const { todo, setSelectedTodo } = props;

  console.log('todo rendered', count++);
  return (
    <>
      <div>
        {todo.task}
        <button onClick={() => setSelectedTodo(todo)}>X</button>
      </div>
    </>
  );
};

export default React.memo(Todo);
