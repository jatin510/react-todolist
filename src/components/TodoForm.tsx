import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export default function TodoForm() {
  const todoContext = useContext(TodoContext);
  const { todos, setTodos } = todoContext;

  const [taskInput, setTaskInput] = useState('');

  function handleTaskInputChange(e: any) {
    setTaskInput(e.target.value);
  }

  function handleTodoFormSubmit(e: any) {
    e.preventDefault();
    setTaskInput('');

    setTodos([...todos, { id: Math.random(), task: taskInput }]);
  }

  return (
    <>
      <form onSubmit={handleTodoFormSubmit}>
        <input
          type="text"
          placeholder="Enter the task"
          value={taskInput}
          onChange={handleTaskInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
