import Todo from './Todo';
import TodoForm from './TodoForm';
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export default function TodoList() {
  const [deleteSelectedTodo, setDeleteSelectedTodo] = useState(null);
  const [editSelectedTodo, setEditSelectedTodo] = useState(null);

  const todoContext = useContext(TodoContext);
  const { todos, deleteTodo, editTodo } = todoContext;

  useEffect(() => {
    if (deleteSelectedTodo != null) {
      deleteTodo(deleteSelectedTodo.id);
      setDeleteSelectedTodo(null);
    }
  }, [deleteSelectedTodo]);

  useEffect(() => {
    if (editSelectedTodo != null) {
      editTodo(editSelectedTodo.id, editSelectedTodo.task);
      setEditSelectedTodo(null);
    }
  }, [editSelectedTodo]);

  return (
    <>
      <TodoForm />
      {todos &&
        todos.map((todo: any) => (
          <Todo
            key={todo.id}
            todo={todo}
            setDeleteSelectedTodo={setDeleteSelectedTodo}
            setEditSelectedTodo={setEditSelectedTodo}
          />
        ))}
    </>
  );
}
