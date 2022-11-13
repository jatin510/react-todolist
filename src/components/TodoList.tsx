import Todo from './Todo';
import TodoForm from './TodoForm';
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export default function TodoList() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const todoContext = useContext(TodoContext);
  const { todos, deleteTodo } = todoContext;

  useEffect(() => {
    if (selectedTodo != null) {
      deleteTodo(selectedTodo.id);
      setSelectedTodo(null);
    }
  }, [selectedTodo]);

  return (
    <>
      <TodoForm />
      {todos &&
        todos.map((todo: any) => (
          <Todo key={todo.id} todo={todo} setSelectedTodo={setSelectedTodo} />
        ))}
    </>
  );
}
