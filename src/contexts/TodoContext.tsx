import { createContext, useState } from 'react';

export interface ITodo {
  id: string | number;
  task: string;
}

export interface ITodoContext {
  todos: ITodo[];
  setTodos: any;
  deleteTodo: any;
}

const TodoContext = createContext({} as ITodoContext);

const TodoProvider = (props: any) => {
  const [todos, setTodos] = useState(() => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  });

  function deleteTodo(id: any) {
    const filteredTodos = todos.filter((todo: ITodo) => todo.id != id);

    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
    setTodos(filteredTodos);
  }

  const value = { todos, setTodos, deleteTodo };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
