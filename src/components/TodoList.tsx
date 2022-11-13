import Todo from './Todo';
import TodoForm from './TodoForm';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export default function TodoList() {
  const todoContext = useContext(TodoContext);
  const { todos, memoizedDeleteTodo } = todoContext;

  return (
    <>
      <TodoForm />
      {todos &&
        todos.map((todo: any) => (
          <Todo
            key={todo.id}
            task={todo.task}
            taskId={todo.id}
            deleteTodo={memoizedDeleteTodo}
          />
        ))}
    </>
  );
}
